import { RootState } from 'src/@core/redux/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectMarketPriceLoading = createSelector(
  (state: RootState) => state.market,
  market => market.marketPrices.isLoading
)

export const selectListMarketPrice = (state: RootState) => state.market.marketPrices.data
