<template>
  <label class="inline-flex items-center">
    <input
      type="radio"
      class="form-radio"
      name="radio"
      :value="option"
      @change="radioChangeEvent"
    >
    <span class="ml-2">{{ option }}</span>
  </label>
</template>
<script lang='ts'>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'BRadio',
  props: {
    option: {
      type: String,
      default: 'option',
      required: true,
    },
  },
  setup(props, { emit }) {
    function radioChangeEvent() {
      emit('input', props.option)
    }

    return {
      radioChangeEvent,
    }
  },
})
</script>