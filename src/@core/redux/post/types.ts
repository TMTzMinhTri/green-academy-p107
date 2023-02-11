export interface IPostReducer {
  postCatalogue: {
    isLoading: boolean
    data: IPostCatalogue[]
  }
}

export interface IPostCatalogue {
  id: number
  name: string
}
