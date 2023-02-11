export interface IProductReducer {
  product: {
    isLoading: boolean
    data: IProduct[]
    meta: IParamsPagination
  }
}

export interface IProduct {
  id: number
  slug: string
  title: string
  view_count: number
  viewed: number
  total_like: number
  total_comment: number
  unit_name: string
  qr_code: string
  catalogue_name: string
  classable_id: number
  classable_type: string
  code: string
  images: Array<IImage>
  province_name: string
  retail_price: number
  wholesale_price: number
}

interface IImage {
  id: number
  imageable_id: string
  imageable_type: string
  classable_id: number
  classable_type: string
  name: string
  total_like: number
  total_comment: number
}
