import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectLoadingPostCatalogue = (state: RootState) => state.post.postCatalogue.isLoading
export const selectListPostCatalogue = (state: RootState) => state.post.postCatalogue.data

export const selectListPost = createSelector(
  (state: RootState) => state.post,
  post => Object.values(post.post.data)
)
