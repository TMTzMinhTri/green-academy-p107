import axios from 'axios'
import { browserName, browserVersion } from 'react-device-detect'

const getDataInStorage = () => {
  const currentUser = JSON.parse(localStorage.getItem('current-user')) || {}
  let deviceToken = JSON.parse(localStorage.getItem('device')) || null
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
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  const { currentUser, deviceToken } = getDataInStorage()
  const token = currentUser?.authToken || ''

  config.headers['Authorization'] = token.length > 0 ? `Bearer ${token}` : token
  config.headers['Device-Id'] = `${currentUser?.id}-${currentUser?.phone}-${browserVersion}`
  config.headers['Device-Token'] = deviceToken
  return config
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance
