import axios from 'axios'
import { browserName, browserVersion } from 'react-device-detect'

const getDataInStorage = () => {
  const currentUser = JSON.parse(localStorage.getItem('user_storage')) || {}
  const deviceToken = JSON.parse(localStorage.getItem('device')) || null

  return {
    deviceToken,
    currentUser
  }
}

const instance = axios.create({
  baseURL: process.env.API_DOMAIN,
  headers: {
    'Device-Type': 'Web',
    'Device-Name': browserName,
    'Os-Version': browserVersion,
    'App-Version': 1,

    // 'Content-Type': 'application/json'
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
  }
})

instance.interceptors.request.use(config => {
  const { currentUser, deviceToken } = getDataInStorage()
  const { current_user, authToken } = currentUser.user_data
  const token = authToken || ''

  config.headers['Authorization'] = token.length > 0 ? `Bearer ${token}` : token
  config.headers['Device-Id'] = `${current_user?.id}-${current_user?.phone}-${browserVersion}`
  config.headers['Device-Token'] = deviceToken

  return config
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance
