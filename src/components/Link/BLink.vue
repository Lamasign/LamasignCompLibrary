<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="[classes]"
    @click="onClick($event)"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import {
  LinkVariantsMap,
  LinkVariantsEnum,
  LinkVariantsArray,
  LinkDisabledClassesMap,
  LinkTags,
  LinkTagsEnum,
  LinkTagsArray
} from './BLink.types'
import { DOM_EVENTS_ENUM } from '../../utils'

export default defineComponent({
  name: 'TRLink',
  props: {
    /**
     * The variant of the Link.
     */
    variant: {
      type: String as PropType<LinkVariantsEnum>,
      required: false,
      default: LinkVariantsEnum.PRIMARY,
      validator: (prop: LinkVariantsEnum) => LinkVariantsArray.includes(prop)
    },
    /**
     * Wether or not the Link should be disabled
     */
    disabled: {
      type: Boolean,
      required: false,
      defaut: false
    },
    /**
     * Use this prop if you want the Link to render as another HTML element
     */
    tag: {
      type: String as PropType<LinkTags>,
      required: false,
      default: LinkTagsEnum.ANCHOR,
      validator: (prop: LinkTagsEnum) => LinkTagsArray.includes(prop)
    }
  },
  emits: [DOM_EVENTS_ENUM.CLICK],
  setup(props, { emit }) {
    const classes = computed(() => props.disabled ? LinkDisabledClassesMap[props.variant] : LinkVariantsMap[props.variant])

    function onClick(event: Event) {
      emit(DOM_EVENTS_ENUM.CLICK, event)
    }

    return {
      classes,
      onClick
    }
  }
})
</script>
