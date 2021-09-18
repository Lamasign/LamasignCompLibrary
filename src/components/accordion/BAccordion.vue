<template>
  <div
    :class="classes"
    class="border-2 p-2 rounded mt-2"
  >
    <button @click="click">{{ title }}</button>
    <div
      class="mt-4 border-2 p-2 rounded"
      :class="isAccordionOpen ? 'd-block' : 'hidden'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from '@vue/composition-api'
import { AccordionVariantsEnum, AccordionVariantsArray, AccordionVariantsMap } from './BAccordion.types'

export default defineComponent({
  name: 'BAccordion',
  props: {
    title: {
      type: String,
      required: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<AccordionVariantsEnum>,
      required: false,
      default: AccordionVariantsEnum.PRIMARY,
      validator: (prop: AccordionVariantsEnum) => AccordionVariantsArray.includes(prop)
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => AccordionVariantsMap[props.variant])
    const isAccordionOpen = ref(props.isOpen)

    function click() {
      isAccordionOpen.value = !isAccordionOpen.value
      emit('open', isAccordionOpen.value)
    }
    return {
      isAccordionOpen,
      click,
      classes,
    }
  }
})
</script>
