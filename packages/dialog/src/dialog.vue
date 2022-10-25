<template>
  <mui-overlay
    v-show="visible"
    custom-mask-event
    :mask="modal"
    :overlay-class="modalClass"
    :z-index="zIndex"
    @clickMask="close"
  >
    <div @click.stop>
      <slot />
    </div>
  </mui-overlay>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
export default defineComponent({
  name: "MuiDialog"
})
</script>
<script lang="ts" setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
import MuiOverlay from '../../overlay/src/overlay.vue';

const emit = defineEmits<{
  (e: 'update:model-value', visible: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean,
  closeDelay?: number
}>()

const visible = ref(false)
const modal = ref(true)
const modalClass = ref('dialog-container')
const zIndex = ref(1)

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      open()
    } else {
      if (visible.value) {
        close()
      }
    }
  }
)

const close = () => {
  if (props.closeDelay && props.closeDelay > 0) {
    setTimeout(() => {
      doClose()
    }, props.closeDelay)
  } else {
    doClose()
  }
}

const open = () => {
  if (props.closeDelay && props.closeDelay > 0) {
    setTimeout(() => {
      doOpen()
    }, props.closeDelay)
  } else {
    doOpen()
  }
  emit('update:model-value', true)
}

const doClose = () => {
  emit('update:model-value', false)
  visible.value = false
}

const doOpen = () => {
  visible.value = true
}


</script>

<style>

</style>