<template>
  <label :class="classes">
    <slot name="icon" />
    <span
      v-if="label"
      class="mt-2 text-base leading-normal"
    >
      {{ label }}
    </span>
    <input
      :value="value"
      v-bind="$attrs"
      :disabled="disabled"
      :aria-disabled="disabled"
      type='file'
      id="inputFile"
      class="hidden"
      @change="uploadFile($event)"
      multiple
    />
  </label>
</template>
<script lang='ts'>
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { InputFileStatusesArray, InputFileStatusesClassesMap, InputFileStatusesEnum } from './BFileInput.types'

export default defineComponent({
  name: 'BFileInput',
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String as PropType<InputFileStatusesEnum>,
      default: InputFileStatusesEnum.DEFAULT,
      validator: (prop: InputFileStatusesEnum) => InputFileStatusesArray.includes(prop),
    },
  },
  setup(props, { emit }) {

    function uploadFile(event: any) {
      emit('uploadFile', event.srcElement.files)
    }

    const classes = computed(() => InputFileStatusesClassesMap[props.variant])

    return {
      uploadFile,
      classes,
    }
  },
})
</script>