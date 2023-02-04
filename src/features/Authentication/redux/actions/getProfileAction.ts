import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import accountApi from 'src/@core/api/account.api'
import { authApiPath } from 'src/@core/constants/auth'
import { IAuthReducer } from '../../types'

export const getProfile = createAsyncThunk(authApiPath.getProfile, async (_, { rejectWithValue }) => {
  try {
    const response = await accountApi.getProfile()
    console.log(response)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getProfileBuilder = (builder: ActionReducerMapBuilder<IAuthReducer>) => {
  builder.addCase(getProfile.pending, state => {
    state.isLoading = true
  })
  builder.addCase(getProfile.fulfilled, (state, action) => {
    state.isLoading = false
    state.currentUser = action.payload
  })
  builder.addCase(getProfile.rejected, state => {
    state.isLoading = false
  })
}
