<template>
  <table class="shadow-lg bg-white">
    <!-- <slot
      :item="item"
      :index="index"
    /> -->
    <BTableColumn label="id">
      <template v-slot="{ item }">
        {{ item.value }}
      </template>
    </BTableColumn>
  </table>
</template>

// scoped slots pour binder sur les fiels des items slots de colonnes 
// props des colonnes le field surlequel on bind, le label du field, isSortable
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
