export interface IActicleReducer {
  acticles: {
    data: IActicle[]
    isLoading: boolean
    meta: IParamsPagination
  }
}

export interface IActicle {
  id: number
  title: string
  image: string
  total_comment: number
  audio_link: string
  content: string
  slug: string
}
