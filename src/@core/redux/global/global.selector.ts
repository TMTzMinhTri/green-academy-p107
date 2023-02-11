import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/@core/redux/store'

export const selectAuthReducer = createSelector(
  (state: RootState) => state.global,
  global => global
)

export const selectGlobalLoading = (state: RootState) => state.global.isLoading

export const selectListNotification = (state: RootState) => state.global.notification.data
