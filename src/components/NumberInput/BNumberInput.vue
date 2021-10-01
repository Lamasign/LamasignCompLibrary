<template>
  <div class="inline-flex relative">
    <BButton
      :disabled="disabled"
      class="rounded-full"
      @click="onDecreaseValue"
    >
      -
    </BButton>
    <input
      class="mx-8"
      v-bind="$attrs"
      :disabled="disabled"
      :aria-disabled="disabled"
      type="number"
      :class="classes"
      v-model="innerValue"
    >
    <BButton
      :disabled="disabled"
      class="rounded-full"
      @click="onIncreaseValue"
    >
      +
    </BButton>
  </div>
</template>

<script lang="ts">
import Decimal from 'decimal.js-light'
import { computed, defineComponent, inject, PropType } from '@vue/composition-api'
import { NumberInputStatusesClassesMap, NumberInputStatusesEnum } from './BNumberInput.types'
import { FIELD_STATUS_INJECTION_KEY } from '../Field/BField.types'
import { DOM_EVENTS_ENUM } from '../../utils'
import BButton from '../../components/Button/BButton.vue'
/**
 * Form Input with automatic validation (when used with BField).
 */
export default defineComponent({
  name: 'BNumberInput',
  components: {
    BButton
  },
  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
      default: 0
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: Number,
      default: 1
    }
  },
  emits: [DOM_EVENTS_ENUM.INPUT],
  setup(props, { emit }) {
    const fieldStatus = inject(FIELD_STATUS_INJECTION_KEY, computed(() => NumberInputStatusesEnum.DEFAULT))

    const classes = computed(() => NumberInputStatusesClassesMap[fieldStatus.value])

    function transformEmittedValue(emittedValue: number): number | string {
      return typeof props.value === 'string'
        ? emittedValue.toString()
        : emittedValue
    }

    const innerValue = computed({
      get: () => new Decimal(props.value).toNumber(),
      set: val => {
        if (val) {
          let formattedValue = new Decimal(val.toString().replace(',', '.')).toNumber()
          if (val < props.min) {
            formattedValue = props.min
          }
          if (props.max && val > props.max) {
            formattedValue = props.max
          }
          emit(DOM_EVENTS_ENUM.INPUT, transformEmittedValue(formattedValue))
        } else {
          emit(DOM_EVENTS_ENUM.INPUT, transformEmittedValue(0))
        }
      }
    })

    function onDecreaseValue() {
      innerValue.value -= props.step
    }

    function onIncreaseValue() {
      innerValue.value += props.step
    }

    return {
      classes,
      innerValue,
      onIncreaseValue,
      onDecreaseValue
    }
  }
})
</script>

<style scoped>
/* RESET OF NATIVE ARROWS ON INPUT TYPE NUMBER */

 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
