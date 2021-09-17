<template>
  <div class="relative pt-1 w-full">
    <div :class="lightClasses">
      <div :class="[classes, width]" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from '@vue/composition-api'
import {
  ProgressBarVariantsMap,
  ProgressBarLightVariantsMap,
  ProgressBarVariantsEnum,
  ProgressBarVariantsArray,
  ProgressBarProgressionStepArray,
  ProgressBarProgressionStepEnum,
} from '@/components/ProgressBar/BProgressBar.types'

export default defineComponent({
  name: 'BProgressBar',
  props: {
    variants: {
      type: String as PropType<ProgressBarVariantsEnum>,
      required: false,
      default: ProgressBarVariantsEnum.PRIMARY,
      validator: (prop: ProgressBarVariantsEnum) => ProgressBarVariantsArray.includes(prop)
    }
  },
  setup(props) {
    const classes = computed(() => ProgressBarVariantsMap[props.variants])
    const lightClasses = computed(() => ProgressBarLightVariantsMap[props.variants])
    const width = ref(ProgressBarProgressionStepEnum['0%'])

    function progressBarAnimation() {
      for (let index = 0; index < ProgressBarProgressionStepArray.length; index++) {
        setInterval(function() { width.value = ProgressBarProgressionStepArray[index] }, 3000)
      }
    }

    onMounted(() => progressBarAnimation())

    return {
      classes,
      lightClasses,
      width,
      progressBarAnimation,
    }
  },
})
</script>
