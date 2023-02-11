import { RootState } from '../store'

export const selectProductLoading = (state: RootState) => state.product.product.isLoading
export const selectListProduct = (state: RootState) => state.product.product.data
