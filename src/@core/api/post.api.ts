import axios from 'src/@core/libs/axios'
import { postApiPath } from '../constants/post'

// interface IParamsGetListPost extends IParamsPagination {
//   container: 'home'
// }

const postApi = {
  // getListPost: (params: IParamsGetListPost): Promise<AxiosResponse<INewFeed[]>> => {
  //   return axios.get(postApiPath.getListPost, { params })
  // },
  getListPostCatalogue: () => {
    return axios.get(postApiPath.getListPostCatalogue)
  }
}

export default postApi
