<template>
  <div
    flex-col
    justify-between
    h-full
    justify-items-center
  >
    <!-- <div class="w-full flex justify-center items-center">
      <BButton variant="warning">warning</BButton>
      <BButton variant="danger">danger</BButton>
      <BButton variant="success">success</BButton>
      <BButton variant="promotion">promo</BButton>
      <BButton variant="primary">primary</BButton>
    </div>

    <div class="w-full flex justify-around items-center">
      <BLink>Link</BLink>
      <BLink variant="warning">Link</BLink>
      <BLink variant="danger">Link</BLink>
      <BLink variant="success">Link</BLink>
      <BLink variant="promotion">Link</BLink>
      <BLink variant="primary">Link</BLink>
    </div>

    <div class="w-full flex justify-around items-center">
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

    <div class="w-full flex justify-center items-center">
      <BMessage variant="warning">warning</BMessage>
      <BMessage variant="danger">danger</BMessage>
      <BMessage variant="success">success</BMessage>
      <BMessage variant="promotion">promo</BMessage>
      <BMessage variant="primary">primary</BMessage>
    </div>

    <div class="w-full flex justify-center items-center">
      <BField
        status="success"
        class="flex flex-col space-y-8"
        label="My awesome label"
        message="valid"
      >
        <BNumberInput
          variant="success"
          value="1"
        />
      </BField>

      <BField
        status="error"
        class="flex flex-col space-y-8"
        label="My awesome label"
        message="not valid"
      >
        <BNumberInput
          variant="error"
          valur="1"
        />
      </BField>
      <BField
        status="warning"
        class="flex flex-col space-y-8"
        label="My awesome label"
        message="not valid"
      >
        <BNumberInput
          variant="warning"
          valur="1"
        />
      </BField>
    </div>

    <div class="w-full flex justify-center items-center">
      <BTag variant="promotion">Im a promotion tag</BTag>
      <BTag variant="success">Im a success tag</BTag>
      <BTag variant="danger">Im a danger tag</BTag>
      <BTag variant="warning">Im a warning tag</BTag>
      <BTag>Im a tag</BTag>
    </div> -->

    <div class="w-full flex justify-center items-center">
      <BAccordion
        title="test accordéon"
        :isOpen="test"
      >
        <div class="w-full flex justify-center items-center">
          <BCheckbox
            variant="success"
            label="test"
            v-model="test"
          />
          <BCheckbox
            variant="danger"
            label="test"
            v-model="test"
          />
          <BCheckbox
            variant="warning"
            label="test"
            v-model="test"
          />
          <BCheckbox
            label="test"
            v-model="test"
          />
        </div>
      </BAccordion>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import BButton from '@/components/Button/BButton.vue'
import BLink from './Link/BLink.vue'
import BInput from '@/components/Input/BInput.vue'
import BField from '@/components/Field/BField.vue'
import BMessage from './Message/BMessage.vue'
import BNumberInput from '@/components/NumberInput/BNumberInput.vue'
import BTag from '@/components/Tag/BTag.vue'
import BCheckbox from './Checkbox/BCheckbox.vue'
import BAccordion from '@/components/accordion/BAccordion.vue'

export default defineComponent({
  components: {
    BButton,
    BInput,
    BField,
    BLink,
    BMessage,
    BNumberInput,
    BTag,
    BCheckbox,
    BAccordion,
  },
  name: 'App',
  setup() {
    const test = ref(false)

    return {
      test
    }
  }
})
</script>
