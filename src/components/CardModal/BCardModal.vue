<template>
  <Transition name="fade">
    <div
      v-if="isModalActive"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
      @click.self="close"
    >
      <div class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <header
          v-if="hasSlotHeader"
          class="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t mb-3"
        >
          <slot name="title" />
        </header>
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray-800 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>
        <slot />

        <div
          v-if="hasSlotFooter"
          class="flex justify-between p-6 border-t border-solid border-blueGray-200 rounded-b"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from '@vue/composition-api'

export default defineComponent({
  name: 'BCardModal',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    const isModalActive = ref(props.isActive)

    const hasSlotHeader = computed(() => slots.title)

    const hasSlotFooter = computed(() => slots.footer)

    watch(() => props.isActive, newValue => isModalActive.value = newValue)

    function close() {
      isModalActive.value = false
      emit('close', false)
    }
    return {
      close,
      isModalActive,
      hasSlotHeader,
      hasSlotFooter,
    }
  },
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>