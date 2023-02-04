import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from 'src/features/Authentication/redux/authSlice'

const combinedReducer = combineReducers({
  [authSlice.name]: authSlice.reducer
})

export default combinedReducer
