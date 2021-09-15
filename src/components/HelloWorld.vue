<template>
  <div class="w-full flex justify-center items-center">
    <BButton>BUTTON</BButton>
    <BButton variant="warning">BUTTON</BButton>
    <BButton variant="danger">BUTTON</BButton>
    <BButton variant="success">BUTTON</BButton>
    <BButton variant="promotion">BUTTON</BButton>
    <BButton variant="primary">BUTTON</BButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BButton from '@/components/Button/BButton.vue'

export default defineComponent({
  components: { BButton },
  name: 'App'
})
</script>
