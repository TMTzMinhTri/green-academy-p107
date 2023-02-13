import { all } from 'redux-saga/effects'
import globalSaga from './global/global.saga'
import mainLayoutSaga from './saga/mainLayoutSaga'
import { postSaga } from './saga/postSaga'

export default function* rootSaga() {
  yield all([globalSaga(), mainLayoutSaga(), postSaga()])
}
