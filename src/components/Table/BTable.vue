<template>
  <table class="flex shadow-lg bg-white">
    <slot />
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import BTableColumn from '@/components/Table/BTableColumn.vue'

export default defineComponent({
  name: 'BTable',
  components: {
    BTableColumn,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const tableData = computed(() => props.data)
    return {
      tableData,
    }
  },
})
</script>
