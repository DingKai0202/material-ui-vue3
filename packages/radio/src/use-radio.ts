export function useRadio(props: any) {

  const { label, size, disabled, modelValue } = props

  return {
    label,
    size,
    disabled,
    modelValue
  }
} 