import { IPost } from './../post/types'
import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import postApi from 'src/@core/api/post.api'
import { postActions } from '../post/post.slice'

export function* fetchPosts() {
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
