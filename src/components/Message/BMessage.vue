<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { MessageVariantsArray, MessageVariantsEnum, MessageVariantsMap } from './BMessage.types'

export default defineComponent({
  name: 'BMessage',
  props: {
    variant: {
      type: String as PropType<MessageVariantsEnum>,
      required: false,
      default: MessageVariantsEnum.PRIMARY,
      validator: (prop: MessageVariantsEnum) => MessageVariantsArray.includes(prop)
    }
  },
  setup(props) {
    const classes = computed(() => MessageVariantsMap[props.variant])
    return {
      classes
    }
  }
})
</script>
