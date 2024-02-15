interface ConditionData {
  text: string
  icon: string
}

export interface DayData {
  date: string
  day: {
    condition: ConditionData
    maxwind_kph: number
    avgtemp_f: number
    avgtemp_c: number
    avghumidity: number
  }
}

export type ForecastData = DayData[]

export interface LocationData {
  country: string
  name: string
  region: string
}

export interface CurrentWeatherData {
  temp_c: number
  temp_f: number
  wind_kph: number
  wind_degree: number
  humidity: number
  condition: ConditionData
}

export interface DayWeatherResponse {
  location: LocationData
  forecast: { forecastday: ForecastData }
  current: CurrentWeatherData
}
