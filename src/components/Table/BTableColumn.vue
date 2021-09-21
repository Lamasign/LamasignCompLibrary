<template>
  <div>
    <thead>
      <tr>
        <th :class="classes">{{ label }}</th>
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
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { TableColumnVariantsEnum, TableColumnVariantsArray, TableColumnHeaderVariantsMap } from '@/components/Table/BTable.types'

export default defineComponent({
  name: 'BTableColumn',
  props: {
    label: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
    variant: {
      type: String as PropType<TableColumnVariantsEnum>,
      default: TableColumnVariantsEnum.PRIMARY,
      validator: (prop: TableColumnVariantsEnum) => TableColumnVariantsArray.includes(prop)
    },
  },
  setup(props) {
    const classes = computed(() => TableColumnHeaderVariantsMap[props.variant])

    return {
      classes
    }
  }
})
</script>
