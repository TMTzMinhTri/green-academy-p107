import axios from 'src/@core/libs/axios'
import { productApiPath } from '../constants/product'

const productApi = {
  getListProduct: (params: IParamsPagination) => {
    return axios.get(productApiPath.getListProduct, { params })
  }
}
export default productApi
