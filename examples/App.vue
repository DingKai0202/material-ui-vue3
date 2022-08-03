<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <mui-button variant="text" :color="textColor" @click="handleClick">按钮</mui-button>
  <mui-button variant="contained" @click="handleClick">按钮</mui-button>
  <mui-button variant="lined" @click="handleClick">按钮</mui-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// name: 'App',
let count = ref<number>(0)
let textColor = ref<string>('red')
  
const handleClick = () => {
  count.value++
  if (count.value === 5) {
    textColor.value = 'green'
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: #2c3e50; */
}
</style>
