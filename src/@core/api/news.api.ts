import axios from 'src/@core/libs/axios'
import { articleApiPath } from '../constants/article'

interface IParamsGetListArticle extends IParamsPagination {
  article_type: string
  is_feature: number
}

const acticleApi = {
  getListArticle: (params: IParamsGetListArticle) => {
    return axios.get(articleApiPath.getListArticle, { params })
  }
}
export default acticleApi
