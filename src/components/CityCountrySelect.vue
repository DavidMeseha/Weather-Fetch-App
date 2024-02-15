<template>
  <select
    class="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
    v-model="selectedCountry"
    @change="changeCountryHandle"
  >
    <option v-for="country in countryTuples" :value="country[1]" :key="country[1]">
      {{ country[0] }}
    </option>
  </select>
  <select
    class="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
    v-model="selectedCity"
    @change="cityChangeHandle"
  >
    <option v-for="city in cities" :value="city[0]" :key="city[0]">
      {{ city[0] }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { allCountries, countryTuples } from '../constants/data'

type countriesKeys = keyof typeof allCountries

const emit = defineEmits(['changeCity'])
const selectedCountry = ref<countriesKeys>('EG')
const cities = computed(() => allCountries[selectedCountry.value][2])
const selectedCity = ref(cities.value[0][0])

function changeCountryHandle() {
  selectedCity.value = cities.value[0][0]
  emit('changeCity', {
    selectedCity: selectedCity.value,
    selectedCountry: allCountries[selectedCountry.value][0]
  })
}

function cityChangeHandle() {
  emit('changeCity', {
    selectedCity: selectedCity.value,
    selectedCountry: allCountries[selectedCountry.value][0]
  })
}
</script>
