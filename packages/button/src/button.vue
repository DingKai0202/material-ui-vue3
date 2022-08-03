
<template>
  <button
    class="mui-btn"
    :class="[`btn-type-${variant}`]"
    :style="buttonStyles"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <div v-if="props.variant === ButtonType.contained" class="btn-loading">loading...</div>
  </button>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "mui-button"
})
</script>

<script lang="ts" setup>
export interface ButtonProps {
  variant?: string,
  color?: string
}

import { defineProps, withDefaults } from 'vue'
import { useButtonStyles } from './buttonStyles'

enum ButtonType {
  text = 'text',
  contained = 'contained',
  outlined = 'outlined'
}

// type ButtonType = "text" | "contained" | "outline";

// import { ButtonProps } from './button'

// 如果需要写默认值，只能调用提供的编译函数
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'text',
  color: '#fff'
})

const buttonStyles = useButtonStyles(props)

</script>


<style lang="scss" scoped>
.mui-btn {
  /* background: #409eff; */
  border-radius: 4px;

  .btn-loading{
    color: #ccc;
  }
}
.btn-type-text {
  background: none;
  border: none;
  padding: 6px 8px;
  span{
    color: #90caf9;
  }
  &:hover {
    background: #409eff;
    cursor: pointer;
    transition: all linear .3s;
    span{
      color: #fff;
    }  
  }
}
.btn-type-contained {
  background: #90caf9;
  border: none;
  padding: 6px 8px;
  span {
    color: #fff;
  }
  &:hover {
    background: #409eff;
    cursor: pointer;
    transition: all linear .3s;
  }
}
.btn-type-lined {
  padding: 6px 8px;
  border: 1px solid #90caf980;
  background: none;
  color: red;
  span{
    color: #90caf9;
  }
  &:hover {
    background: #409eff;
    cursor: pointer;
    transition: all linear .3s;
    border: 1px solid #fff;
    span{
      color: #fff;
    }  
  }
}
</style>