<template>
  <div class="inline-flex relative">
    <input
      v-bind="$attrs"
      :disabled="disabled"
      :aria-disabled="disabled"
      :value="value"
      :type="type"
      :class="classes"
      @input="onInput($event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from '@vue/composition-api'
import { InputTypesEnum, InputTypes, InputTypesArray, InputStatusesClassesMap, InputStatusesEnum } from './BInput.types'
import { FIELD_STATUS_INJECTION_KEY } from './../Field/BField.types'
import { DOM_EVENTS_ENUM } from '../../utils'
/**
 * Form Input with automatic validation (when used with BField).
 */
export default defineComponent({
  name: 'BInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<InputTypes>,
      required: false,
      default: InputTypesEnum.TEXT,
      validator: (prop: InputTypesEnum) => InputTypesArray.includes(prop)
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: [DOM_EVENTS_ENUM.INPUT],
  setup(_, { emit }) {
    const fieldStatus = inject(FIELD_STATUS_INJECTION_KEY, computed(() => InputStatusesEnum.DEFAULT))

    const classes = computed(() => InputStatusesClassesMap[fieldStatus.value])

    function onInput(value: string) {
      emit(DOM_EVENTS_ENUM.INPUT, value)
    }

    return {
      classes,
      onInput
    }
  }
})
</script>
