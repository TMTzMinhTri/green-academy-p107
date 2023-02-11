import { RootState } from '../store'

export const selectLoadingPostCatalogue = (state: RootState) => state.post.postCatalogue.isLoading
export const selectListPostCatalogue = (state: RootState) => state.post.postCatalogue.data
