import { RootState } from './../store'
import { IPayloadLikeAction, IPost } from './../post/types'
import { AxiosResponse } from 'axios'
import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import postApi from 'src/@core/api/post.api'
import { postActions } from '../post/post.slice'

function* fetchPosts() {
  const response: AxiosResponse<IPost[]> = yield call(postApi.getListPost, { container: 'home', limit: 50, page: 1 })
  let { data } = response
  const postTranformed: Record<string, IPost> = data.reduce(
    (result, item) => ({
      ...result,
      [`post-${item['id']}`]: {
        ...item
      }
    }),
    {}
  )
  yield put(postActions.fetchListPostSuccess(postTranformed))
}

function* likePost({ payload }: { payload: IPayloadLikeAction }) {
  const { liked, id } = payload

  const currentPost = yield select((state: RootState) => state.post.post.data[`post-${id}`])
  if (liked) {
    yield call(postApi.unlikePost, { ...payload })
  } else {
    yield call(postApi.likePost, { ...payload })
  }
  yield put(
    postActions.updatePostById({
      id: `post-${id}`,
      data: {
        ...currentPost,
        total_like: liked ? currentPost.total_like - 1 : currentPost.total_like + 1,
        user_liked: !liked
      }
    })
  )
}

export function* postSaga() {
  yield all([takeEvery(postActions.fetchListPost.type, fetchPosts), takeEvery(postActions.likePost, likePost)])
}
