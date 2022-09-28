<template>
    <div class="number">
      <wgh-number-animation v-model="val"></wgh-number-animation>
    </div>
    <div class="number">
      <wgh-number-animation v-model="val" :precision="3"></wgh-number-animation>
    </div>
    <div class="number">
      <wgh-number-animation v-model="val" :precision="3" :duration="8"></wgh-number-animation>
    </div>
    <div class="number">
      <wgh-number-animation v-model="val" :precision="3" :duration="8" :delay="2"></wgh-number-animation>
    </div>
    <div class="number">
      <wgh-number-animation v-model="val" :precision="3" :duration="8" :delay="2" en-us></wgh-number-animation>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeUnmount, onMounted } from 'vue'
  const val = ref(0)
  
  const changeVal = () => {
    val.value = Math.random() * 10000000
    console.log('change', val.value)
  }
  const timer = setInterval(changeVal, 12000);

  onMounted(changeVal)
  onBeforeUnmount(() => {
    if(timer) clearInterval(timer)
  })
  </script>
  
  <style lang="scss" scoped>
  .number {
    font-family: 'Dio';
    font-size: 24px;
    color: #000;
  }
  </style>