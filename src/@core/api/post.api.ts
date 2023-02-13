import { AxiosResponse } from 'axios'
import axios from 'src/@core/libs/axios'
import { postApiPath } from '../constants/post'
import { IPost, IPostCatalogue } from '../redux/post/types'

interface IParamsGetListPost extends IParamsPagination {
  container: 'home'
}

const postApi = {
  getListPost: (params: IParamsGetListPost): Promise<AxiosResponse<IPost[]>> => {
    return axios.get(postApiPath.getListPost, { params })
  },
  getListPostCatalogue: (): Promise<AxiosResponse<IPostCatalogue>> => {
    return axios.get(postApiPath.getListPostCatalogue)
  }
}

export default postApi
