import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductReducer } from './types'

const initialState: IProductReducer = {
  product: {
    isLoading: true,
    data: [],
    meta: {
      limit: 10,
      page: 1
    }
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchListProductSuccess(state, action: PayloadAction<IProduct[]>) {
      state.product.isLoading = false
      state.product.data = action.payload
    }
  }
})

export const productAction = productSlice.actions

export default productSlice
