import { all } from 'redux-saga/effects'
import globalSaga from './global/global.saga'
import mainLayoutSaga from './saga/mainLayoutSaga'

export default function* rootSaga() {
  yield all([globalSaga(), mainLayoutSaga()])
}
