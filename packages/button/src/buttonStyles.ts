import { computed } from "vue";

import { ButtonProps } from './button'

export function useButtonStyles(props: ButtonProps) {

  return computed(() => {
    let styles: Record<string, string> = {}

    const buttonColor = props.color

    styles = {
      "color": buttonColor || 'black'
    }

    return styles

  })
}