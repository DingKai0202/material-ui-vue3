
<template>
  <button
    type="button"
    class="mui-btn"
    :class="[props.disabled ? 'btn-disabled' : `btn-type-${props.variant}`]"
    @click="handleClick"
  >
    <span :style="buttonStyles" v-if="$slots.default">
      <slot></slot>
    </span>
    <div v-if="props.variant === ButtonType.contained" class="btn-loading">loading...</div>
  </button>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "MuiButton"
})
</script>

<script lang="ts" setup>
export interface ButtonProps {
  variant?: string,
  color?: string,
  disabled?: boolean
}

import { defineProps, withDefaults, defineEmits } from 'vue'
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
  color: '',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click') : void;
}>()

const buttonStyles = useButtonStyles(props)

const handleClick = () => {
  emit('click')
}

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
    transition: all linear .2s;
    span{
      color: #fff; 
    }
  }
}

.btn-disabled{
  border: none;
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
  &:hover{
    cursor: not-allowed;
  }
}

.btn-type-contained {
  background: #90caf9;
  border: none;
  padding: 6px 8px;
  span{
    color: #fff;
  }
  &:hover {
    background: #409eff;
    cursor: pointer;
    transition: all linear .2s;
    span{
      color: #fff;
    }
  }
}
.btn-type-lined {
  padding: 6px 8px;
  border: 1px solid #90caf980;
  background: none;
  span {
    color: #90caf9;
  }
  &:hover {
    background: #409eff;
    cursor: pointer;
    transition: all linear .2s;
    border: 1px solid #fff;
    span{
      color: #fff;
    }
  }
}
</style>