import { storageKeys } from '../constants/storageKeys'

export function generateParamsTrackActivity({ url, method, object }) {
  const currentUserStorage = localStorage.getItem(storageKeys.currentUsers)
  let currentUser = null
  if (currentUserStorage) {
    currentUser = JSON.parse(currentUserStorage)
  }

  return {
    user_id: currentUser.user_data.current_user.id,
    client_key: '54e623ef2dc6bf0a281445fc8e3be054531b2fee',
    payload: {
      method,
      path: url,
      params: { ...object }
    }
  }
}
