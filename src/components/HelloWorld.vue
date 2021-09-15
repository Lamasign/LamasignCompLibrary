<template>
  <div
    flex-col
    justify-between
    h-full
    justify-items-center
  >
    <div class="w-full flex justify-center items-center">
      <BButton variant="warning">BUTTON</BButton>
      <BButton variant="danger">BUTTON</BButton>
      <BButton variant="success">BUTTON</BButton>
      <BButton variant="promotion">BUTTON</BButton>
      <BButton variant="primary">BUTTON</BButton>
    </div>
    <div class="w-full flex justify-center items-center">
      <BInput
        type="text"
        value="text"
      />

      <BField
        status="warning"
        class="flex flex-col space-y-8"
        label="My Input"
        message="Not valid"
      >
        <BInput
          type="email"
          value="email"
        />
      </BField>

      <BField
        status="error"
        class="flex flex-col space-y-8"
        label="My Input"
        message="Not valid"
      >
        <BInput
          type="email"
          value="email"
        />
      </BField>

      <BField
        status="success"
        class="flex flex-col space-y-8"
        label="My Input"
        message="Valid"
      >
        <BInput
          type="date"
          value="date"
        />
      </BField>

      <BField
        status="default"
        class="flex flex-col space-y-8"
        label="My Input"
        message="Not valid"
      >
        <BInput
          type="password"
          value="email"
        />
      </BField>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BButton from '@/components/Button/BButton.vue'
import BInput from '@/components/Input/BInput.vue'
import BField from '@/components/Field/BField.vue'

export default defineComponent({
  components: {
    BButton,
    BInput,
    BField,
  },
  name: 'App'
})
</script>
