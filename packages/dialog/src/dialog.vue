<template>
  <mui-overlay
    v-show="visible"
    custom-mask-event
    :mask="modal"
    :overlay-class="modalClass"
    :z-index="zIndex"
  >
    我说的
  </mui-overlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "MuiDialog"
})
</script>
<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity';
import { MuiOverlay } from '~/overlay/index';
const visible = ref(false)
const modal = ref(true)
const modalClass = ref('dialog-container')
const zIndex = ref(1)
</script>

<style>

</style>