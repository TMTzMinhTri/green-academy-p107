import { IImage } from '../product/types'

export interface IPostReducer {
  postCatalogue: {
    isLoading: boolean
    data: IPostCatalogue[]
  }
  post: {
    isLoading: boolean
    data: Record<string, IPost>
  }
}

export interface IPostCatalogue {
  id: number
  name: string
}

export interface IPost {
  id: number
  images: Array<IImage>
  member_rate: string
  province_name: string
  shop_image: string
  shop_name: string
  title: string
  total_comment: number
  total_like: number
  user_level: string
  user_name: string
  user_id: number
  user_liked: boolean
  user_shared: boolean
  user_commented: boolean
  user_comment: boolean
  short_title: string
  shared_post_id: number
  created_at: string
  classable_id: number
  classable_type: string
  comments: Record<string, IComment>
}

export interface IPayloadLikeAction extends IParamsPolymorphic {
  id: number
  liked: boolean
}
export interface IPayloadFetchComment extends IParamsPolymorphic {
  id: number
}
export interface IComment {
  id: number
  classable_id: string
  classable_type: string
  commentable_id: number
  commentable_type: string
  content: string
  total_answers: number
  total_likes: number
  user_commented?: boolean
  user_id: number
  user_liked: boolean
  created_name: string
  created_at: string
  user: any
}
