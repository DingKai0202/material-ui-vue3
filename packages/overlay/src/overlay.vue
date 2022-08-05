<template>
  <div v-if="mask" :class="['mui-overlay', overlayClass ]" :style="{zIndex: zIndex,}" @click="onMaskClick">
    <slot />
  </div>
  <div v-else 
    :class="overlayClass"
    class="un-overlay" 
    :style="{
      zIndex: zIndex,
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "MuiOverlay"
})
</script>

<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from 'vue';
const props = withDefaults(defineProps<{
  mask: boolean,
  overlayClass: string,
  zIndex: number
}>(), {
  mask: true
})

const emit = defineEmits<{
  (e: 'clickMask'): void
}>()

const onMaskClick = () => {
  emit('clickMask')
}

</script>


<style lang="scss" scoped>
.mui-overlay{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
.un-overlay{

}
</style>