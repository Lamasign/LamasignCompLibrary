<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :type="type"
    :class="[colorClasses, sizeClasses]"
    @click="onClick($event)"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { DOM_EVENTS_ENUM } from '@/utils'
import {
  ButtonOutlinedClassesMap,
  ButtonVariantsMap,
  ButtonVariantsEnum,
  ButtonVariantsArray,
  ButtonDisabledClassesMap,
  ButtonTags,
  ButtonTypes,
  ButtonSizes,
  ButtonSizesArray,
  ButtonSizesEnum,
  ButtonTypesArray,
  ButtonTypesEnum,
  ButtonTagsEnum,
  ButtonTagsArray,
  ButtonOutlinedAndDisabledClassesMap,
  ButtonSizesMap
} from '@/components/Button/BButton.types'

export default defineComponent({
  name: 'BButton',
  props: {
    /**
     * The variant of the button.
     */
    variant: {
      type: String as PropType<ButtonVariantsEnum>,
      required: false,
      default: ButtonVariantsEnum.PRIMARY,
      validator: (prop: ButtonVariantsEnum) => ButtonVariantsArray.includes(prop)
    },
    /**
     * Wether or not the button should be disabled
     */
    disabled: {
      type: Boolean,
      required: false,
      defaut: false
    },
    /**
     * Use this prop if you want the Button to render as another HTML element
     */
    tag: {
      type: String as PropType<ButtonTags>,
      required: false,
      default: ButtonTagsEnum.BUTTON,
      validator: (prop: ButtonTagsEnum) => ButtonTagsArray.includes(prop)
    },
    /**
     * The native `type` attribute of the button
     */
    type: {
      type: String as PropType<ButtonTypes>,
      required: false,
      default: ButtonTypesEnum.BUTTON,
      validator: (prop: ButtonTypesEnum) => ButtonTypesArray.includes(prop)
    },
    /**
     * Defines the size of the button
     */
    size: {
      type: String as PropType<ButtonSizes>,
      required: false,
      default: ButtonSizesEnum.DEFAULT,
      validator: (prop: ButtonSizesEnum) => ButtonSizesArray.includes(prop)
    },
    /**
     * Applies the 'Outlined' variant to the button
     */
    outlined: {
      type: Boolean,
      default: false
    }
  },
  emits: [DOM_EVENTS_ENUM.CLICK],
  setup(props, { emit }) {
    const colorClasses = computed(() => {
      if (props.disabled) {
        return props.outlined
          ? ButtonOutlinedAndDisabledClassesMap[props.variant]
          : ButtonDisabledClassesMap[props.variant]
      }
      return props.outlined
        ? ButtonOutlinedClassesMap[props.variant]
        : ButtonVariantsMap[props.variant]
    })

    const sizeClasses = computed(() => ButtonSizesMap[props.size])

    function onClick(event: Event) {
      emit(DOM_EVENTS_ENUM.CLICK, event)
    }

    return {
      colorClasses,
      sizeClasses,
      onClick
    }
  }
})
</script>
