import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPostCatalogue, IPostReducer } from './types'

const initialState: IPostReducer = {
  postCatalogue: {
    isLoading: true,
    data: []
  }
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostCatalogueSuccess: (state, action: PayloadAction<IPostCatalogue[]>) => {
      state.postCatalogue.data = action.payload
      state.postCatalogue.isLoading = false
    }
  }
})

export const postActions = postSlice.actions

export default postSlice
