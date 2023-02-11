import { IActicle, IActicleReducer } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IActicleReducer = {
  acticles: {
    isLoading: true,
    data: [],
    meta: {
      page: 1,
      limit: 5
    }
  }
}

const acticleSlice = createSlice({
  name: 'acticle',
  initialState,
  reducers: {
    fetchListActicleSuccess: (state, action: PayloadAction<IActicle[]>) => {
      state.acticles.isLoading = false
      state.acticles.data = action.payload
    }
  }
})

export const acticleAction = acticleSlice.actions

export default acticleSlice
