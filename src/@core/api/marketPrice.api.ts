import axios from 'src/@core/libs/axios'
import { marketPriceApiPath } from '../constants/marketPrice'

interface IParamsGetListMarketPrice {
  province_id: number
}

const marketPriceApi = {
  getListMarketPrice: (params: IParamsGetListMarketPrice) => {
    return axios.get(marketPriceApiPath.getListMarketPrice, { params })
  }
}
export default marketPriceApi
