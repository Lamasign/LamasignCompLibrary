<template>
  <div>
    <thead>
      <tr>
        <th class="bg-blue-100 border text-left px-8 py-4">{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-8 py-4">
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
    const item = {
      value: false,
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%'
    }
    return {
      data,
      item,
    }
  },
})
</script>
