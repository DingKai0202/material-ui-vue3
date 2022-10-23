<template>
  <label>
    <span>
      <input
        type="radio"
        v-model="modelValue"
        @change="handleChange"
      />
    </span>
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue'
import { radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps<radioProps>()

const emit = defineEmits<{
  (event: 'change', value: string): void
}>()

const { label, size, disabled, modelValue } = useRadio(props)

function handleChange() {
  emit('change', modelValue.value)
}

</script>

<style>

</style>