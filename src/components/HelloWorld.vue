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

    <BCardModal
      :isActive="test"
      @close="update"
    >
      <template #title>
        <h3 class="text-3xl font-semibold">
          Modal Title
        </h3>
      </template>
      Now that we have the basic styling finished, let’s update the component to use a slot so the content of the modal can be configured where the component is used instead of inside the component. This will make the component much more reusable.
      <template #footer>
        <button
          class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Close
        </button>
        <button
          class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Save Changes
        </button>

      </template>
    </BCardModal>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import BButton from '@/components/Button/BButton.vue'
import BLink from '@/components/Link/BLink.vue'
import BInput from '@/components/Input/BInput.vue'
import BField from '@/components/Field/BField.vue'
import BMessage from '@/components/Message/BMessage.vue'
import BNumberInput from '@/components/NumberInput/BNumberInput.vue'
import BTag from '@/components/Tag/BTag.vue'
import BCheckbox from '@/components/Checkbox/BCheckbox.vue'
import BCardModal from '@/components/CardModal/BCardModal.vue'
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
    BCardModal,
    BAccordion,
  },
  name: 'App',
  setup() {
    const test = ref(true)
    const update = (val: boolean) => {
      test.value = val
    }

    return {
      test,
      update,
    }
  }
})
</script>
