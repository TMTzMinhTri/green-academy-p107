import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IResponseCurrentWeather, IWeatherReducer } from './types'

const initialState: IWeatherReducer = {
  currentWeather: {
    isLoading: true,
    data: {
      current_date: null,
      total_next_date: 0
    }
  }
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchCurrentWeatherSuccess: (state, action: PayloadAction<IResponseCurrentWeather>) => {
      state.currentWeather.isLoading = false
      state.currentWeather.data = action.payload
    }
  }
})

export const weatherActions = weatherSlice.actions

export default weatherSlice
