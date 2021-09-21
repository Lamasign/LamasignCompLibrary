<template>
  <div>
    <thead>
      <tr>
        <th class="bg-blue-light border text-center px-8 py-4">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="flex flex-col">
        <td
          v-for="(item, index) in data"
          :key="index"
          class="border px-8 py-4"
        >
          <slot :item="item">
          </slot>
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'BTableColumn',
  props: {
    label: {
      type: String,
      required: false,
    },
    arrayData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const data = ref(props.arrayData)
    return {
      data,
    }
  },
})
</script>
