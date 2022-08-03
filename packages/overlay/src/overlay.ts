import { createVNode, defineComponent, renderSlot, h, CSSProperties } from 'vue'
export default defineComponent({
  name: "mui-overlay",
  props: {
    // 是否需要遮罩
    mask: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String
    },
    zIndex: {
      type: Number
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    // mask 点击事件
    const onMaskClick = () => {
      emit('click')
    }

    return props.mask ? createVNode(
      'div',
      {
        class: ['mui-overlay', props.overlayClass],
        style: {
          zIndex: props.zIndex,
        },
        onClick: onMaskClick
      },
      [renderSlot(slots, 'default')],
    )
    // 不显示mask
    : h(
      'div',
      {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          background: 'red'
        } as CSSProperties,
      },
      [renderSlot(slots, 'default')]
    )
  }
})
