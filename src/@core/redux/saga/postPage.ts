import { all, takeEvery } from 'redux-saga/effects'
import { postActions } from '../post/post.slice'
import { fetchChildComments, fetchCommentsInPost, fetchPosts, likeCommentInPost, likePost } from '../post/post.saga'

export default function* watchingPostSaga() {
  yield all([
    takeEvery(postActions.fetchListPost.type, fetchPosts),
    takeEvery(postActions.likePost, likePost),
    takeEvery(postActions.fetchCommentsInPost, fetchCommentsInPost),
    takeEvery(postActions.likeComment, likeCommentInPost),
    takeEvery(postActions.fetchChildComments, fetchChildComments)
  ])
}
