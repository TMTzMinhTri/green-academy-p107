import { all, takeEvery } from 'redux-saga/effects'
import globalSaga from './global/global.saga'
import { postActions } from './post/post.slice'
import mainLayoutSaga from './saga/mainLayoutSaga'
import { fetchPosts } from './saga/postSaga'

export default function* rootSaga() {
  yield all([globalSaga(), mainLayoutSaga(), takeEvery(postActions.fetchListPost.type, fetchPosts)])
}
