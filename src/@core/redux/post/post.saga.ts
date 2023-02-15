import { AxiosResponse } from 'axios'
import { call, put, select } from 'redux-saga/effects'
import postApi from 'src/@core/api/post.api'
import { RootState } from '../store'
import { postActions } from './post.slice'
import { IComment, IPayloadFetchComment, IPayloadLikeAction, IPost } from './types'
import get from 'lodash/get'
import set from 'lodash/set'
import merge from 'lodash/merge'

export function* likePost({ payload }: { payload: IPayloadLikeAction }) {
  const { liked, pattern } = payload

  delete payload.liked
  delete payload.pattern

  const post = yield select((state: RootState) => state.post.post.data)
  const currentPost = get(post, pattern)

  if (liked) {
    yield call(postApi.unlikeItem, { ...payload })
  } else {
    yield call(postApi.likeItem, { ...payload })
  }
  yield put(
    postActions.updatePostById({
      id: `post-${currentPost.id}`,
      data: {
        ...currentPost,
        total_like: liked ? currentPost.total_like - 1 : currentPost.total_like + 1,
        user_liked: !liked
      }
    })
  )
}
export function* fetchPosts() {
  const response: AxiosResponse<IPost[]> = yield call(postApi.getListPost, { container: 'home', limit: 50, page: 1 })
  const { data } = response
  const postTranformed: Record<string, IPost> = data.reduce(
    (result, item) => ({
      ...result,
      [`post-${item['id']}`]: {
        ...item,
        comment: {}
      }
    }),
    {}
  )
  yield put(postActions.fetchListPostSuccess(postTranformed))
}

export function* fetchCommentsInPost({ payload }: { payload: IPayloadFetchComment }) {
  const { id } = payload
  const currentPost = yield select((state: RootState) => state.post.post.data[`post-${id}`])
  try {
    const response = yield call(postApi.getCommentsInPost, {
      ...payload,
      limit: 5,
      page: 1
    })
    const { data } = response
    const commentTranformed: Record<string, IComment> = data.reduce(
      (result, item) => ({
        ...result,
        [`comment-${item['id']}`]: {
          ...item,
          children: {},
          meta: {
            page: 1,
            limit: 5,
            isLoading: false
          }
        }
      }),
      {}
    )
    yield put(
      postActions.updatePostById({
        id: `post-${id}`,
        data: {
          ...currentPost,
          comment: {
            ...commentTranformed
          }
        }
      })
    )
  } catch (error) {}
}

export function* likeCommentInPost({ payload }: { payload: IPayloadLikeAction }) {
  const { liked, pattern } = payload

  delete payload.liked
  delete payload.pattern

  try {
    if (liked) {
      yield call(postApi.unlikeItem, { ...payload })
    } else {
      yield call(postApi.likeItem, { ...payload })
    }
    yield put(
      postActions.updatePostWithPattern({
        pattern,
        value: !liked
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export function* fetchChildComments({ payload }) {
  const post: IPost = yield select((state: RootState) => state.post.post.data)
  const rootComment: IComment = get(post, payload.pattern)
  const currentPost = post[`post-${rootComment.commentable_id}`]

  try {
    const response = yield call(postApi.fetchChildComments, {
      commentId: rootComment.id,
      page: rootComment.meta.page,
      limit: rootComment.meta.limit
    })
    const { data } = response

    const commentTranformed: Record<string, IComment> = data.reduce(
      (result, item) => ({
        ...result,
        [`comment-${item['id']}`]: {
          ...item,
          children: {},
          meta: {
            page: 1,
            limit: 5,
            isLoading: false
          }
        }
      }),
      {}
    )
    set(post, `${payload.pattern}.children`, merge({}, rootComment.children, commentTranformed))
    yield put(
      postActions.updatePostById({
        id: `post-${rootComment.commentable_id}`,
        data: {
          ...currentPost,
          comment: {
            ...currentPost.comment,
            [`comment-${rootComment.id}`]: {
              ...currentPost.comment[`comment-${rootComment.id}`],
              children: merge({}, rootComment.children, commentTranformed)
            }
          }
        }
      })
    )
  } catch (error) {
    console.log(error)
  }
}
