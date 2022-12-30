import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarsStore = defineStore('cars', () => {
  const cars = reactive([
    {
      id: 0,
      name: 6,
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Старый рынок', 'Минутка'],
      short_road: ['Беркат', 'Минутка'],
      time: 10,
      price: 52,
      trip: 'city' 
    },
    {
      id: 1,
      name: 111,
      type: 'Газель',
      count_places: 17,
      places: ['Беркат', '1-ая гиманзия', 'Иподромный'],
      short_road: ['Беркат', 'Иподромный'],
      time: 15,
      price: 60,
      trip: 'city'
    },
    {
      id: 2,
      name: 31,
      type: 'Газель',
      count_places: 17,
      places: ['Беркат', 'ТЦ Молл', 'Колледж ГГНТУ'],
      short_road: ['Беркат', 'Колледж ГГНТУ'],
      time: 20,
      price: 28,
      trip: 'city'
    },
    {
      id: 3,
      name: 28,
      type: 'Газель',
      count_places: 17,
      places: ['Беркат', 'Пенсионный', 'Ахмат арена'],
      short_road: ['Беркат', 'Ахмат арена'],
      time: 25,
      price: 28,
      trip: 'city'
    },
    {
      id: 4,
      name: 29,
      type: 'Газель',
      count_places: 17,
      places: ['Беркат', 'пр. Путина', 'Микрорайон'],
      short_road: ['Беркат', 'Микрорайон'],
      time: 15,
      price: 28,
      trip: 'city'
    },
    {
      id: 5,
      name: "Алхан-Кала",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Заводской', 'Алхан-Кала'],
      short_road: ['Беркат', 'Алхан-Кала'],
      time: 20,
      price: 70,
      trip: 'village'
    },
    {
      id: 6,
      name: "Cерноводск",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Алхан-Кала', 'Cерноводск'],
      short_road: ['Беркат', 'Cерноводск'],
      time: 20,
      price: 100,
      trip: 'village'
    },
    {
      id: 7,
      name: "Урус-Мартан",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Алхан-Кала', 'Урус-Мартан'],
      short_road: ['Беркат', 'Урус-Мартан'],
      time: 20,
      price: 100,
      trip: 'village'
    },
    {
      id: 8,
      name: "Ачхой-Мартан",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Ачхой-Мартан'],
      short_road: ['Беркат', 'Ачхой-Мартан'],
      time: 20,
      price: 100,
      trip: 'village'
    },
    {
      id: 9,
      name: "Гикало",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Гикало'],
      short_road: ['Беркат', 'Гикало'],
      time: 20,
      price: 80,
      trip: 'village'
    },
    {
      id: 10,
      name: "Пригородное",
      type: 'Газель',
      count_places: 18,
      places: ['Беркат', 'Пригородное'],
      short_road: ['Беркат', 'Пригородное'],
      time: 20,
      price: 80,
      trip: 'village'
    },
  ])

  const getCityCars = computed(() => cars.filter(item => item.trip === 'city'))
  const getVillageCars = computed(() => cars.filter(item => item.trip === 'village'))
  
  function getDefineCarData(id) {
    return cars.filter(item => item.id == +id)
  }

  function searchCars(searchRequest, flag) {
    if (!flag) {
      const typeCars = cars.filter(item => item.trip === 'city')
      return typeCars.filter(item => item.places.some(item => item.includes(searchRequest)))
    } else {
      const typeCars = cars.filter(item => item.trip === 'village')
      return typeCars.filter(item => item.places.some(item => item.includes(searchRequest)))
    }
  }

  return { cars, getCityCars, getVillageCars, getDefineCarData, searchCars }
})
