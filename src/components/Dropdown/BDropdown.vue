<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div class="relative flex flex-col align-middle w-full">
        <button
          :class="classes"
          class="font-bold text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full"
          type="button"
          @click="toggleDropdown()"
        >
          {{ title }}
        </button>

        <div
          :class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}"
          class="bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg mt-1"
          style="min-width:12rem"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from '@vue/composition-api'
import {
  DropdownVariantsMap,
  DropdownVariantsEnum,
  DropdownVariantsArray,
} from '@/components/Dropdown/BDropdown.types'

export default defineComponent({
  name: "BDropdown",
  props: {
    variants: {
      type: String as PropType<DropdownVariantsEnum>,
      required: false,
      default: DropdownVariantsEnum.PRIMARY,
      validator: (prop: DropdownVariantsEnum) => DropdownVariantsArray.includes(prop)
    },
    title: {
      type: String,
      required: true,
    }
  },
  setup(props, { emit }) {
    const dropdownPopoverShow = ref(false)
    const classes = computed(() => DropdownVariantsMap[props.variants])

    function toggleDropdown() {
      dropdownPopoverShow.value = !dropdownPopoverShow.value
      emit('toggleDropdown', dropdownPopoverShow.value)
    }

    return {
      toggleDropdown,
      dropdownPopoverShow,
      classes,
    }
  }

})
</script>
