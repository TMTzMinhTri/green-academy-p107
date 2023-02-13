import { AxiosResponse } from 'axios'
import axios from 'src/@core/libs/axios'
import { postApiPath } from '../constants/post'
import { IPost, IPostCatalogue } from '../redux/post/types'

interface IParamsGetListPost extends IParamsPagination {
  container: 'home'
}
export interface IParamsLikesPost {
  classable_id: number
  classable_type: string
}

const postApi = {
  getListPost: (params: IParamsGetListPost): Promise<AxiosResponse<IPost[]>> => {
    return axios.get(postApiPath.getListPost, { params })
  },
  getListPostCatalogue: (): Promise<AxiosResponse<IPostCatalogue>> => {
    return axios.get(postApiPath.getListPostCatalogue)
  },
  likePost: (params: IParamsLikesPost) => {
    return axios.post(postApiPath.likePost, { ...params })
  },
  unlikePost: (params: IParamsLikesPost) => {
    return axios.post(postApiPath.unLikePost, { ...params })
  }
}

export default postApi
