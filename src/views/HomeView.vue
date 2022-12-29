<script setup>
import Toggle from '../components/toggle.vue'
import InputText from 'primevue/inputtext';
import Card from '../components/card.vue'
</script>

<template>
  <div class="container">
    <span class="p-input-icon-right  w-full sticky mb-2" style="top: 5px">
      <i class="pi pi-search"></i>
      <InputText type="text" v-model="value" class="p-1 w-full" />
    </span>

    <div class="grid mt-2">
      <card />
      <card />
      <card />
      <card />
    </div>

    <toggle />
  </div>
</template>
