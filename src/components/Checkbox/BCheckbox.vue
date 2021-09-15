<template>
  <div>
    <input
      :class="classes"
      type="checkbox"
      :checked="value"
      @input="(event) => $emit('input', event.target.checked)"
    />
    <label class="flex flex-row items-center font-bold cursor-pointer text">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { CheckboxVariantsEnum, CheckboxVariantsArray, CheckboxsVariantsMap } from './BCheckbox.types'

export default defineComponent({
  name: 'BCheckbox',
  props: {
    /**
     * The variant of the Checkbox.
     */
    variant: {
      type: String as PropType<CheckboxVariantsEnum>,
      required: false,
      default: CheckboxVariantsEnum.PRIMARY,
      validator: (prop: CheckboxVariantsEnum) => CheckboxVariantsArray.includes(prop)
    },
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const classes = computed(() => CheckboxsVariantsMap[props.variant])

    return {
      classes,
    }
  }
})
</script>
