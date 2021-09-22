<template>
  <div class="flex justify-center">
    <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-700 ease-in">
      <input
        :value="updatedValue"
        type="checkbox"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        :class="{ 'right-0 border-green': updatedValue }"
        @input="toggleSwitch"
      />
      <div
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        :class="{ 'bg-green': updatedValue }"
      />
    </div>
    <label>
      {{ label }}
    </label>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'BSwitch',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const updatedValue = ref(props.value)

    function toggleSwitch() {
      updatedValue.value = !updatedValue.value
      emit('switch', updatedValue.value)
    }

    return {
      updatedValue,
      toggleSwitch,
    }
  },
})
</script>
