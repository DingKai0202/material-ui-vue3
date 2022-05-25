
<template>
  <button class="mui-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "mui-button"
})
</script>

<style scoped>
.mui-btn {
  background: #409eff;
  border-radius: 4px;
  color: #fff;
}
</style>