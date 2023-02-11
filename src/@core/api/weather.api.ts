import axios from 'src/@core/libs/axios'
import { weatherApiPath } from '../constants/weather'

interface IParamsGetCurrentWeather {
  lat: string
  lng: string
}

const weatherApi = {
  getCurrentWeather: (params: IParamsGetCurrentWeather) => {
    return axios.get(weatherApiPath.getCurrentWeather, { params })
  }
}

export default weatherApi
