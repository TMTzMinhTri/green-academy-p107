import { AxiosResponse } from 'axios'
import axios from 'src/@core/libs/axios'
import { postApiPath } from '../constants/post'
import { IPost, IPostCatalogue } from '../redux/post/types'

interface IParamsGetListPost extends IParamsPagination {
  container: 'home'
}

interface IParamsGetChildComments extends IParamsPagination {
  commentId: number
}

const postApi = {
  getListPost: (params: IParamsGetListPost): Promise<AxiosResponse<IPost[]>> => {
    return axios.get(postApiPath.getListPost, { params })
  },
  getListPostCatalogue: (): Promise<AxiosResponse<IPostCatalogue>> => {
    return axios.get(postApiPath.getListPostCatalogue)
  },
  likeItem: (params: IParamsPolymorphic) => {
    return axios.post(postApiPath.likeItem, { ...params })
  },
  unlikeItem: (params: IParamsPolymorphic) => {
    return axios.post(postApiPath.unLikeItem, { ...params })
  },
  getCommentsInPost: (params: IParamsPolymorphic & IParamsPagination) => {
    return axios.get(postApiPath.fetchCommentsInPost, { params })
  },
  fetchChildComments: (params: IParamsGetChildComments) => {
    const id = params.commentId
    delete params.commentId

    return axios.get(`${postApiPath.fetchCommentsInPost}/${id}/answers`, { params })
  }
}

export default postApi
