import { RootState } from './../../../@core/redux/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectAuthReducer = createSelector(
  (state: RootState) => state.auth,
  auth => auth
)
