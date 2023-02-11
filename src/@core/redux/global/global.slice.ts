import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalReducer } from './types'

const initialState: IGlobalReducer = {
  currentUser: null,
  isLoading: true,
  notification: {
    isLoading: false,
    meta: {
      limit: 20,
      page: 1
    },
    data: []
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fetchUser(state) {
      state.isLoading = true
    },
    fetchUserSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false
      state.currentUser = action.payload
    },
    fetchUserFailed(state) {
      state.isLoading = false
    },
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload
    },
    fetchNavigation(state) {
      state.notification.isLoading = true
    },
    fetchNotificationSuccess(state, action: PayloadAction<any>) {
      state.notification.isLoading = false
      state.notification.data = action.payload
    }
  }
})

export const globalActions = globalSlice.actions

export default globalSlice.reducer
