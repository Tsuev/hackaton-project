<template>
  <div class="product col-12">
    <div class="product__card">
      <div class="product__img"></div>
      <div class="product__content">
        <Timeline :value="places" layout="horizontal" align="bottom">
          <template #content="slotProps">
            {{ slotProps.item.status }}
          </template>
          <template #marker="slotProps">
            <span class="custom-marker" style="color:green">
              <i :class="slotProps.item.icon"></i>
            </span>
          </template>
        </Timeline>
        <div class="product__title product__info">Транспорт <span>{{ car.type }}</span></div>
        <div class="product__number product__info">Номер <span>{{ car.name }}</span></div>
        <div class="product__road-time product__info">Время поездки <span>{{ car.time }} минут</span> </div>
        <div class="product__amount product__info">Количество мест <span>{{ car.count_places }} мест</span> </div>
        <div class="product__amount product__info">Цена <span>{{ car.price }} руб.</span> </div>
      </div>
    </div>
    <div class="product__btn" @click="$router.push('/')">Назад</div>
  </div>
</template>

<script setup>
import Timeline from 'primevue/timeline';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCarsStore } from '../stores/cars';

const store = useCarsStore()
const route = useRoute()

const car = computed(() => store.getDefineCarData(route.params.id)[0])
console.log(car);
console.log(store.getDefineCarData(route.params.id));

const places = computed(() => (store.getDefineCarData(route.params.id))[0].places.map(item => {
  return { status: item, icon: 'pi pi-circle' }
}))

</script>

<style lang="scss" scoped>
.product {
  border-radius: 5px;
  box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
  background: #fff;
  overflow: hidden;

  &__img {
    background-image: url('../assets/img/gazel.png');
    background-repeat: no-repeat;
    background-size: 95%;
    background-position: center;
    min-height: 250px;
  }

  &__content {
    padding: 0 20px;
  }

  &__title span,
  &__number span,
  &__road-time span,
  &__amount span {
    padding: 0 10px;
    color: #fff;
    background: rgb(0, 132, 234);
    font-weight: bold;
    border-radius: 2px;
    float: right;
    text-align: center;
  }

  &__info {
    margin: 10px 0;
  }

  &__btn {
    padding: 10px 20px;
    color: #fff;
    background: rgb(0, 132, 234);
    font-weight: bold;
    border-radius: 2px;
    text-align: center;
    margin: 5px 15px;
  }
}
</style>