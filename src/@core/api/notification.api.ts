import axios from 'src/@core/libs/axios'
import { nofiticationApiPath } from '../constants/notification'

const notificationApi = {
  getListNotifications: (params: IParamsPagination) => {
    return axios.get(nofiticationApiPath.getListNotifications, { params })
  }
}

export default notificationApi
