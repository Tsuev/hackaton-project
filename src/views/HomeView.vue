<template>
  <div class="container">
    <span class="p-input-icon-right w-full sticky mb-2" style="top: 5px; z-index: 200;">
      <i class="pi pi-search"></i>
      <InputText placeholder="Введите маршрут..." type="text" v-model="searchCarsRequest" class="p-1 w-full" />
    </span>

    <div v-if="!findCars?.length" class="grid mt-2">
      <card v-for="car in cars" :key="car.id" :id="car.id" :name="car.name" :type="car.type"
        :short_road="car.short_road" :price="car.price" />
    </div>
    <div v-else class="grid mt-2">
      <card v-for="car in findCars" :key="car.id" :id="car.id" :name="car.name" :type="car.type"
        :short_road="car.short_road" :price="car.price" />
    </div>

    <toggle @check="mutationCityVillageFlag" />
  </div>
</template>

<script setup>
import Toggle from '../components/toggle.vue'
import InputText from 'primevue/inputtext';
import Card from '../components/card.vue'
import { ref, watch } from 'vue';
import { useCarsStore } from '../stores/cars';
import { computed } from 'vue';

const store = useCarsStore()

const searchCarsRequest = ref('')
const cityVillageFlag = ref(false)
let findCars = ref([])


const mutationCityVillageFlag = flag => cityVillageFlag.value = flag
const cars = computed(() => cityVillageFlag.value ? store.getVillageCars : store.getCityCars)

watch(searchCarsRequest, value => findCars = store.searchCars(value, cityVillageFlag))

</script>
