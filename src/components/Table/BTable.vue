<template>
  <table class="flex shadow-lg bg-white">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BTable',
})
</script>
