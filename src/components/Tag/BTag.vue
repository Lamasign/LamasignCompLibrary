<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { TagVariantsEnum, TagVariantsArray, TagsVariantsMap } from './BTag.types'
export default defineComponent({
  name: 'BTag',
  props: {
    /**
     * The variant of the tag.
     */
    variant: {
      type: String as PropType<TagVariantsEnum>,
      required: false,
      default: TagVariantsEnum.PRIMARY,
      validator: (prop: TagVariantsEnum) => TagVariantsArray.includes(prop)
    }
  },
  setup(props) {
    const classes = computed(() => TagsVariantsMap[props.variant])

    return {
      classes
    }
  }
})
</script>
