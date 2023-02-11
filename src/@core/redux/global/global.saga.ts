import { all, call, spawn, put, select, takeLatest } from 'redux-saga/effects'
import accountApi from 'src/@core/api/account.api'
import { globalActions } from './global.slice'
import notificationApi from 'src/@core/api/notification.api'

function* fetchNotifications() {
  try {
    const { data: notifications, meta } = yield select(state => state.global.notification)
    const response = yield call(notificationApi.getListNotifications, { ...meta })
    yield put(globalActions.fetchNotificationSuccess(notifications.concat(response.data)))
  } catch (error) {}
}

function* fetchCurrentUser() {
  try {
    const response = yield call(accountApi.getProfile)
    const { data } = response
    yield put(globalActions.fetchUserSuccess(data))

    yield all([takeLatest(globalActions.fetchNavigation.type, fetchNotifications), spawn(fetchNotifications)])
  } catch (error) {}
}

export default function* globalSaga() {
  yield takeLatest(globalActions.fetchUser.type, fetchCurrentUser)
}
