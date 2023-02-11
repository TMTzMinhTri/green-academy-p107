export interface IWeatherReducer {
  currentWeather: {
    isLoading: boolean
    data: IResponseCurrentWeather
  }
}

export interface IResponseCurrentWeather {
  current_date: ICurrentWeather
  total_next_date: number
}

export interface ICurrentWeather {
  id: number
  dt: number
  feels_like: number
  humidity: number
  district_name: string
  lat: string
  lng: string
  location_full_name: string
  location_name: string
  temp_max: number
  temp_min: number
  temp: number
  sunrise: string
  sunset: string
  pressure: number
  weather_status: string
  weather_status_icon: string
  wind_speed: number
  week_name: string
  visibility: number
  wind_deg: number
  clouds_all: number
  audio_link: string
  current_weather_group: IWeatherGroup[]
}

interface IWeatherGroup {
  hour: string
  label: string
  temp: number
  weather_status: string
  weather_status_icon: string
}
