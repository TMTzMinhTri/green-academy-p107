export interface IGlobalReducer {
  isLoading: boolean
  currentUser: any
  notification: {
    isLoading: boolean
    meta: IParamsPagination
    data: any
  }
}
