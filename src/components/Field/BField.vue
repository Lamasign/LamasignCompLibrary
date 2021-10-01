<template>
  <div class="mb-2">
    <slot name="label">
      <label
        v-if="label && !noLabel"
        :for="labelFor"
        :class="[
          extraLabelClasses,
          { 'sr-only': $slots.label },
          labelsClasses
        ]"
      >
        {{ label }}
      </label>
    </slot>
    <template v-if="$slots.default">
      <slot />
    </template>
    <!-- @slot Custom message slot if you need total control over it.-->
    <slot name="message">
      <span
        v-if="message"
        :class="[messageClasses]"
      >
        {{ message }}
      </span>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from '@vue/composition-api'
import { FieldStatusesTypes, FieldStatusesArray, FieldStatusesEnum, FieldMessageStatusesClassesMap, LabelStatusClassesMap, FIELD_STATUS_INJECTION_KEY } from './BField.types'
import { stringOrNullValidator } from '../../utils/'

export default defineComponent({
  name: 'BField',
  props: {
    /**
     * Label of the field.
     * Can be null to avoid rendering the HTML.
     */
    label: {
      type: String,
      default: null,
      validator: stringOrNullValidator
    },
    /**
     * HTML label `for` attribute.
     */
    labelFor: {
      type: String,
      default: null,
      validator: stringOrNullValidator
    },
    /**
     * Additional classes to apply to the `<label>` element.
     */
    extraLabelClasses: {
      type: String,
      default: ''
    },
    /**
     * Message to render after the input, useful for validation info.
     */
    message: {
      type: String,
      default: null,
      validator: stringOrNullValidator
    },
    /**
     * Validation status.
     */
    status: {
      type: String as PropType<FieldStatusesTypes>,
      default: FieldStatusesEnum.DEFAULT,
      validator: (prop: FieldStatusesEnum) => FieldStatusesArray.includes(prop)
    },
    /**
     * Totally disable the label
     * (won't even render the hidden, accessible `<label>` when using `label` slot)
     */
    noLabel: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const status = computed(() => props.status)
    provide(FIELD_STATUS_INJECTION_KEY, status)

    const messageClasses = computed(() => FieldMessageStatusesClassesMap[status.value])
    const labelsClasses = computed(() => LabelStatusClassesMap[status.value])

    return {
      messageClasses,
      labelsClasses
    }
  }
})
</script>
