export {}
declare global {
  interface IThunkApiConfig {
    rejectValue: Record<string, any>
  }

  interface IParamsPagination {
    limit: number
    page: number
  }
  interface IResponseData<T> {
    data: T
    success: boolean
    msg: string
  }
}
