import { authApiPath } from './../constants/auth'
import axios from 'src/@core/libs/axios'

const accountApi = {
  getProfile: () => {
    return axios.get(authApiPath.getProfile)
  }
}
export default accountApi
