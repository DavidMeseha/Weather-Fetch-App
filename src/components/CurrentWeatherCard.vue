<template>
  <div class="card now">
    <div class="card-body">
      <div class="d-flex gap-1 align-items-center mb-4">
        <img :src="currentWeatherData.condition.icon" />
        <div>
          <h5 class="card-title">{{ new Date().toLocaleDateString('en-us') }}, Now</h5>
          <h6 class="card-subtitle mb-2 text-secondary">{{ currentWeatherData.condition.text }}</h6>
        </div>
      </div>
      <div class="d-flex text-center justify-content-between">
        <div>
          <h6>Wind</h6>
          <p class="text-secondary">{{ currentWeatherData.wind_kph }} kph</p>
        </div>
        <div>
          <h6>Temperature</h6>
          <p class="text-secondary">{{ currentWeatherData.temp_f }} &deg;F</p>
          <p class="text-secondary">{{ currentWeatherData.temp_c }} &deg;C</p>
        </div>
        <div>
          <h6>Humidity</h6>
          <p class="text-secondary">{{ currentWeatherData.humidity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrentWeatherData } from '../types'

interface Props {
  currentWeatherData: CurrentWeatherData
}

const { currentWeatherData } = defineProps<Props>()
</script>
