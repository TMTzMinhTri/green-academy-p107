import { all } from 'redux-saga/effects'
import globalSaga from './global/global.saga'
import mainLayoutSaga from './saga/mainLayoutSaga'
import postPage from './saga/postPage'

export default function* rootSaga() {
  yield all([globalSaga(), mainLayoutSaga(), postPage()])
}
