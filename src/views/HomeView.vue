<template>
  <section class="container py-5" id="weather-view">
    <div class="d-flex gap-4">
      <CityCountrySelect @changeCity="changeCityHandle" />
    </div>

    <h2 v-if="data?.location.country !== country" class="my-4 text-capitalize" id="title">
      {{ `${city}, ${country}` }}
    </h2>
    <h2 v-else-if="data?.location.country === country" class="my-4 text-capitalize" id="title">
      {{ `${data?.location.region || data?.location.name}, ${data?.location.country}` }}
    </h2>

    <div class="d-flex justify-content-center align-items-center">
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="isRefetching">Loading...</p>
      <p v-else-if="isError">No Data Avilable</p>
      <p v-else-if="data?.location.country !== country">No Data Avilable</p>
      <div
        class="d-flex flex-wrap gap-4 justify-content-center align-items-center"
        v-else-if="!!data"
      >
        <CurrentWeatherCard :currentWeatherData="data.current" />
        <CardComponent
          v-for="day in data.forecast.forecastday"
          :dayWeatherData="day"
          v-bind:key="day.date"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CityCountrySelect from '@/components/CityCountrySelect.vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import CurrentWeatherCard from '@/components/CurrentWeatherCard.vue'
import type { DayWeatherResponse } from '../types'

const API_KEY = import.meta.env.VITE_API_KEY

const city = ref('Cairo')
const country = ref('Egypt')

// let ipQuery = useQuery({
//   queryKey: ['ip'],
//   queryFn: () =>
//     axios.get<{ ip: string }>('https://api.ipify.org?format=json').then((res) => res.data)
// })

let { data, isLoading, isError, refetch, isRefetching } = useQuery({
  queryKey: ['weather', city.value],
  queryFn: () =>
    axios
      .get<DayWeatherResponse>(`/forecast.json?key=${API_KEY}&q=${city.value}&days=20`)
      .then((res) => res.data)
})

function changeCityHandle(props: { selectedCity: string; selectedCountry: string }) {
  city.value = props.selectedCity
  country.value = props.selectedCountry
  refetch()
}
</script>
