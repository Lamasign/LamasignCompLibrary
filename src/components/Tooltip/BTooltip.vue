<template>
  <div class='has-tooltip'>
    <span :class='finalClasses'>{{ message }}</span>
    <slot />
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { TooltipPositionEnum, TooltipPositionsArray, TooltipPositionsMap, TooltipVariantsArray, TooltipVariantsEnum, TooltipVariantsMap } from './BTooltip.types'

export default defineComponent({
  name: 'BTooltip',
  props: {
    message: {
      type: String,
      default: 'Tooltip content',
    },
    variant: {
      type: String as PropType<TooltipVariantsEnum>,
      default: TooltipVariantsEnum.PRIMARY,
      validator: (props: TooltipVariantsEnum) => TooltipVariantsArray.includes(props),
    },
    position: {
      type: String as PropType<TooltipPositionEnum>,
      default: TooltipPositionEnum.TOP,
      validator: (prop: TooltipPositionEnum) => TooltipPositionsArray.includes(prop),
    },
  },
  setup(props) {
    const classes = computed(() => TooltipVariantsMap[props.variant])
    const positionClasse = computed(() => TooltipPositionsMap[props.position])
    const finalClasses = computed(() => `${classes.value} ${positionClasse.value}`)

    return {
      finalClasses,
    }
  },
})
</script>
