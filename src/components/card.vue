<template>
  <div class="col-12 px-3">
      <div class="card grid md:p-4 relative">
        <div class="card__img col-5"></div>
        <div class="card__content col-7 p-4">
          <div class="card__title">Транспорт <span>Газель</span></div>
          <div class="card__title">Номер <span>6</span></div>
          <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
              {{ slotProps.item.status }}
            </template>
            <template #marker="slotProps">
              <span class="custom-marker" style="color:green;">
                <i :class="slotProps.item.icon"></i>
              </span>
            </template>
          </Timeline>
        </div>
        <div class="card__price bg-green-600 px-4 py-2 absolute left-0 bottom-0 text-0">50 ₽</div>
        <div class="card__btn px-4 py-2 absolute right-0 bottom-0 text-0" @click="$router.push('/product')">Перейти</div>
      </div>
  </div>
</template>

<script setup>
import Timeline from 'primevue/timeline';

const events = [
  {status: "Беркат", icon: 'pi pi-circle'},
  {status: "Минутка", icon: 'pi pi-circle'},
]

</script>

<style lang='scss' scoped>
.card {
  border-radius: 5px;
  box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
  background: #fff;
  overflow: hidden;

  &__title span {
    padding: 0 10px;
    color: #fff;
    background: rgb(0, 132, 234);
    font-weight: bold;
    border-radius: 2px;
    float: right;
    font-size: 16px;
  }

  &__title:first-child {
    margin-bottom: 10px;
    font-size: 20px;
  }

  &__price {
    border-radius: 0 0 0 5px;
    font-weight: bold;
  }

  &__btn{
    background: rgb(0, 132, 234);
    font-weight: bold;
  }

  &__img {
    background-image: url('../assets/img/gazel.png');
    background-repeat: no-repeat;
    background-size: 95%;
    background-position: center;
    min-height: 200px;
  }
}
</style>