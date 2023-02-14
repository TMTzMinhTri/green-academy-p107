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
  },
  likePost: (params: IParamsPolymorphic) => {
    return axios.post(postApiPath.likePost, { ...params })
  },
  unlikePost: (params: IParamsPolymorphic) => {
    return axios.post(postApiPath.unLikePost, { ...params })
  },
  getCommentsInPost: (params: IParamsPolymorphic & IParamsPagination) => {
    return axios.get(postApiPath.fetchCommentsInPost, { params })
  }
}

export default postApi
