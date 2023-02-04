import { createSlice } from '@reduxjs/toolkit'
import { IAuthReducer } from '../types'
import { getProfileBuilder, getProfile } from './actions/getProfileAction'

const initialState: IAuthReducer = {
  currentUser: null,
  isLoading: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    getProfileBuilder(builder)
  }
})

export const authActions = { ...authSlice.actions, getProfile }

export default authSlice.reducer
