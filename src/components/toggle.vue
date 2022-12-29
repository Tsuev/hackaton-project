<template>
  <div class="toggle__wrapper fixed bottom-0 left-0 w-full px-2">
    <label class="toggle flex relative">
      <input v-model="active" type="checkbox" hidden>
      <div class="toggle__check"></div>
      <div class="toggle__item" :class="{ 'active': !active }">город</div>
      <div class="toggle__item" :class="{ 'active': active }">вне города</div>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false)
</script>

<style lang='scss' scoped>
.toggle {
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  background: #d9d9d9;
  margin-bottom: 5px;
  box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);

  &__check {
    height: 30px;
    width: 50%;
    position: absolute;
    left: 0;
    border-radius: 5px;
    background: #fff;
    transition-duration: .3s;
  }

  &__item {
    font-size: 17px;
    color: rgb(108, 108, 108);
    text-align: center;
    font-weight: 500;
    width: 50%;
    padding: 5px;
    position: relative;
    z-index: 20;
  }

  [type="checkbox"]:checked+&__check {
    left: 50%;
    transition-duration: .3s;
  }
}

.active {
  color: #000;
}
</style>