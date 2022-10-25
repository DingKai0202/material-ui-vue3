<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <mui-button>默认</mui-button>
  <mui-button variant="text" :color="textColor" @click="handleClick">按钮</mui-button>
  <mui-button variant="contained" @click="handleClick">按钮</mui-button>
  <mui-button variant="lined" @click="openDialog">按钮</mui-button>
  <mui-button disabled @click="openDialog">按钮</mui-button>
  <mui-button variant="lined" @click="clickButton">点击事件</mui-button>
  <mui-button color="secondary">点击事件</mui-button>
  <mui-dialog v-model="dialogVisible">
    <h1>标题</h1>
    <p style="background: white">内容是付费电视</p>
    <span>弄啊萨芬</span>
  </mui-dialog>
  <mui-icon color="red">
    <AddCircle />
  </mui-icon>
  <mui-icon color="red">
    <AddCircle />
  </mui-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddCircle } from '@vicons/ionicons5'

// name: 'App',
let count = ref<number>(0)
let textColor = ref<string>('red')
const dialogVisible = ref<boolean>(false)
  
const handleClick = () => {
  count.value++
  if (count.value === 5) {
    textColor.value = 'green'
  }
}

const openDialog = () => {
  dialogVisible.value = true
}

const clickButton = () => {
  console.log('点击按钮');
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  /* background: rgb(0, 30, 60); */
}
</style>
