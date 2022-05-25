
<template>
  <button class="mui-btn">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <div class="btn-loading">loading...</div>
  </button>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "mui-button"
})
</script>

<style lang="scss" scoped>
.mui-btn {
  background: #409eff;
  border-radius: 4px;
  .btn-loading{
    color: #ccc;
  }
}
</style>