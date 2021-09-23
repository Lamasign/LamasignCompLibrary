<template>
  <div :class="finalClasses">
    <span>
      {{ label }}
    </span>
    <button
      v-if="isCloseButton"
      class="bg-transparent text-xl font-semibold leading-none  outline-none focus:outline-none cursor-pointer"
      @click="closeBadge()"
    >
      <span>×</span>
    </button>
  </div>

</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { BadgeColorsArray, BadgeColorsEnum, BadgeSizeEnum, BadgeSizesArray, BadgeVariantsArray, BadgeVariantsEnum, BadgesSizesMap, BadgesColorsMap } from '@/components/Badge/BBadge.types'

export default defineComponent({
  name: 'BBadge',
  props: {
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String as PropType<BadgeVariantsEnum>,
      default: BadgeVariantsEnum.BASIC,
      validator: (prop: BadgeVariantsEnum) => BadgeVariantsArray.includes(prop),
    },
    size: {
      type: String as PropType<BadgeSizeEnum>,
      default: BadgeSizeEnum.XS,
      validator: (prop: BadgeSizeEnum) => BadgeSizesArray.includes(prop),
    },
    color: {
      type: String as PropType<BadgeColorsEnum>,
      default: BadgeColorsEnum.DEFAULT,
      validator: (prop: BadgeColorsEnum) => BadgeColorsArray.includes(prop),
    },
  },
  setup(props, { emit }) {

    function closeBadge() {
      emit('close')
    }
    const isCloseButton = computed(() => props.variant === BadgeVariantsEnum.CLOSE_BUTTON)

    const sizeClasses = computed(() => BadgesSizesMap[props.size])

    const colorClasses = computed(() => BadgesColorsMap[props.color])

    const finalClasses = computed(() => `${colorClasses.value} ${sizeClasses.value}`)

    return {
      closeBadge,
      isCloseButton,
      finalClasses,
    }
  },
})
</script>