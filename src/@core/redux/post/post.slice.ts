import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPayloadFetchComment, IPayloadLikeAction, IPost, IPostCatalogue, IPostReducer } from './types'
import set from 'lodash/set'

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
      state.post.isLoading = false
      state.post.data = action.payload
    },
    fetchChildComments: (state, action: PayloadAction<{ pattern: string }>) => {
      set(state.post.data, `${action.payload['pattern']}.meta.isLoading`, true)
    },
    updatePostById: (state, action: PayloadAction<{ id: string; data: IPost }>) => {
      state.post.data[action.payload['id']] = action.payload.data
    },
    updatePostWithPattern: (state, action: PayloadAction<{ pattern: string; value: any }>) => {
      set(state.post.data, action.payload.pattern, action.payload.value)
    }
  }
})
const likePost = createAction('posts/likePost', (payload: IPayloadLikeAction) => ({
  payload
}))
const fetchCommentsInPost = createAction('posts/fetchCommentsInPost', (payload: IPayloadFetchComment) => ({
  payload
}))

const likeComment = createAction('posts/likeComment', (payload: IPayloadLikeAction) => ({ payload }))

export const postActions = { ...postSlice.actions, likePost, fetchCommentsInPost, likeComment }

export default postSlice
