<template>
  <div class="card day">
    <div class="card-body">
      <div class="d-flex gap-1 align-items-center mb-4">
        <img :src="dayWeatherData.day.condition.icon" />
        <div>
          <h5 class="card-title">{{ dayWeatherData.date }}</h5>
          <h6 class="card-subtitle mb-2 text-secondary">{{ dayWeatherData.day.condition.text }}</h6>
        </div>
      </div>
      <div class="d-flex text-center justify-content-between">
        <div>
          <h6>Wind</h6>
          <p class="text-secondary">{{ dayWeatherData.day.maxwind_kph }} kph</p>
        </div>
        <div>
          <h6>Temperature</h6>
          <p class="text-secondary">{{ dayWeatherData.day.avgtemp_f }} &deg;F</p>
          <p class="text-secondary">{{ dayWeatherData.day.avgtemp_c }} &deg;C</p>
        </div>
        <div>
          <h6>Humidity</h6>
          <p class="text-secondary">{{ dayWeatherData.day.avghumidity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DayData } from '../types'
interface Props {
  dayWeatherData: DayData
}

const { dayWeatherData } = defineProps<Props>()
</script>
