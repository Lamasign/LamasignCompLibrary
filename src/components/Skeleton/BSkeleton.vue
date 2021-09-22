<template>
  <component
    :is="tag"
    class="w-full h-full"
  >
    <div
      v-if="variant === SkeletonVariantsEnum.RECTANGULAR"
      :class="finalClasses"
    />
    <div
      v-else-if="variant === SkeletonVariantsEnum.CIRCULAR"
      :class="finalClasses"
    />
    <div
      v-else-if="variant === SkeletonVariantsEnum.LINE"
      :class="finalClasses"
    />
    <div v-else-if="variant === SkeletonVariantsEnum.TEXT">
      <div :class="finalClasses" />
      <div :class="finalClasses" />
      <div :class="finalClasses" />
    </div>
  </component>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { SkeletonColorsEnum, SkeletonVariantsEnum, SkeletonAnimationsEnum, SkeletonColorsMap, SkeletonVariantsMap, SkeletonAnimationsMap } from '@/components/Skeleton/BSkeleton.types'

export default defineComponent({
  name: 'BSkeleton',
  props: {
    Color: {
      type: String as PropType<SkeletonColorsEnum>,
      default: SkeletonColorsEnum.PLACEHOLDER,
    },
    variant: {
      type: String as PropType<SkeletonVariantsEnum>,
      default: SkeletonVariantsEnum.LINE,
    },
    Animation: {
      type: String as PropType<SkeletonAnimationsEnum>,
      default: SkeletonAnimationsEnum.WAVE,
    },
    with: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    tag: {
      type: String,
      default: 'div',
    }
  },
  setup(props) {
    const colorClasses = computed(() => SkeletonColorsMap[props.Color])
    const variantClasses = computed(() => SkeletonVariantsMap[props.variant])
    const animationClasses = computed(() => SkeletonAnimationsMap[props.Animation])

    const finalClasses = computed(() => `${colorClasses.value} ${variantClasses.value} ${animationClasses.value}`)

    return {
      SkeletonVariantsEnum,
      finalClasses,
    }
  },
})
</script>