import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMarketPrice, IMarketReducer } from './type'

const initialState: IMarketReducer = {
  marketPrices: {
    isLoading: true,
    data: []
  }
}

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    fetchListMarketPricesSuccess: (state, action: PayloadAction<IMarketPrice[]>) => {
      state.marketPrices.isLoading = false
      state.marketPrices.data = action.payload
    }
  }
})

export const marketActions = marketSlice.actions

export default marketSlice
