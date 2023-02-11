import { RootState } from 'src/@core/redux/store'

export const selectCurrentWeather = (state: RootState) => state.weather.currentWeather.data
export const selectLoadingCurrentWeather = (state: RootState) => state.weather.currentWeather.isLoading
