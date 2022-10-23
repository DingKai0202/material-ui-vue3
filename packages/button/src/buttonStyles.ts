import { computed } from "vue";

import { ButtonProps } from './button'

export function useButtonStyles(props: ButtonProps) {

  return computed(() => {
    let styles: Record<string, string> = {}

    let buttonColor
    if (props.color !== 'secondary' || '') {
      buttonColor = '#9c27b0'
    } else {
      buttonColor = props.color || ''
    }

    styles = {
      color: buttonColor
    }

    return styles

  })
}