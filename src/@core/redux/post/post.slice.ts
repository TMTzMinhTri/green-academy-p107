import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPayloadLikeAction, IPost, IPostCatalogue, IPostReducer } from './types'

const initialState: IPostReducer = {
  postCatalogue: {
    isLoading: true,
    data: []
  },
  post: {
    isLoading: true,
    data: {}
  }
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostCatalogueSuccess: (state, action: PayloadAction<IPostCatalogue[]>) => {
      state.postCatalogue.data = action.payload
      state.postCatalogue.isLoading = false
    },
    fetchListPost: state => {
      state.post.isLoading = true
    },
    fetchListPostSuccess: (state, action: PayloadAction<Record<string, IPost>>) => {
      state.post.isLoading = true
      state.post.data = action.payload
    },
    updatePostById: (state, action: PayloadAction<{ id: string; data: IPost }>) => {
      state.post.data[action.payload['id']] = action.payload.data
    }
  }
})
const likePost = createAction('posts/likePost', (payload: IPayloadLikeAction) => ({
  payload
}))

export const postActions = { ...postSlice.actions, likePost }

export default postSlice
