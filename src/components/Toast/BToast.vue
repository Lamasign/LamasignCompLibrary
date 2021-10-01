<template>
  <div
    v-if="isActive"
    class="Toast px-6 py-4 border-0 rounded relative mb-4"
    :class="classes"
  >
    <span class="inline-block align-middle mr-8">
      <slot />
    </span>
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      @click="closeAlert()"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, PropType } from '@vue/composition-api'
import {
  ToastVariantsMap,
  ToastVariantsEnum,
  ToastVariantsArray,
} from '../../components/Toast/BToast.types'

export default defineComponent({
  name: 'BToast',
  props: {
    isToastOpen: {
      type: Boolean,
      default: true,
    },
    toastDuration: {
      type: Number,
      default: 3000,
    },
    variant: {
      type: String as PropType<ToastVariantsEnum>,
      required: false,
      default: ToastVariantsEnum.PRIMARY,
      validator: (prop: ToastVariantsEnum) => ToastVariantsArray.includes(prop)
    },
  },
  setup(props, { emit }) {
    const isActive = ref(props.isToastOpen)

    const classes = computed(() => ToastVariantsMap[props.variant])

    watch(() => props.isToastOpen, newValue => {
      isActive.value = newValue
      if (isActive.value) {
        setTimeout(() => closeAlert(), props.toastDuration)
      }
    })

    function closeAlert() {
      isActive.value = false
      emit('close', false)
    }

    return {
      isActive,
      closeAlert,
      classes,
    }
  },
})
</script>
