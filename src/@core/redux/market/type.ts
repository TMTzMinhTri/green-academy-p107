export interface IMarketReducer {
  marketPrices: {
    isLoading: boolean
    data: IMarketPrice[]
  }
}

export interface IMarketPrice {
  id: number
  image: string
  province_name: string
  province_id: number
  district_name: string
  district_id: number
  search_key: string
  slug: string
  title: string
  unit: string
  classable_id: number
  classable_type: string
  get_market_price_last: {
    id: number
    market_place_id: number
    classable_id: number
    classable_type: string
    max_price: number
    min_price: number
    price: number
    price_difference: number
  }
}
