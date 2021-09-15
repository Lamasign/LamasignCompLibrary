<template>
  <div>
    <div class="w-full flex justify-around items-center">
      <BButton>BUTTON</BButton>
      <BButton variant="warning">BUTTON</BButton>
      <BButton variant="danger">BUTTON</BButton>
      <BButton variant="success">BUTTON</BButton>
      <BButton variant="promotion">BUTTON</BButton>
      <BButton variant="primary">BUTTON</BButton>
    </div>

    <div class="w-full flex justify-around items-center">
      <BLink>Link</BLink>
      <BLink variant="warning">Link</BLink>
      <BLink variant="danger">Link</BLink>
      <BLink variant="success">Link</BLink>
      <BLink variant="promotion">Link</BLink>
      <BLink variant="primary">Link</BLink>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BButton from '@/components/Button/BButton.vue'
import BLink from './Link/BLink.vue'

export default defineComponent({
  components: { BButton, BLink },
  name: 'App'
})
</script>
