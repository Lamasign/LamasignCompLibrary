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

    <!-- <div class="w-full flex justify-center items-center">
      <BCheckbox
        variant="promotion"
        label="test"
        v-model="test"
      />
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
    </div>-->

    <!-- <div class="w-full flex justify-center items-center">
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
    </div> -->

    <!-- <BCardModal
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
    </BCardModal> -->

    <!-- <div class="w-full flex justify-center items-center">
      <BToast :isToastOpen="test" />
    </div> -->

    <!-- <div class="w-full flex justify-center items-center">
      <BDropdown title="dropdown" />
    </div> -->

    <!-- <div class="w-full flex justify-center items-center">
      <BTable>
        <BTableColumn
          :data="list"
          label="id"
        >
          <template v-slot="{ item }">
            {{ item.value }}
          </template>
        </BTableColumn>
        <BTableColumn
          :data="list"
          variant="success"
          label="nom"
        >
          <template v-slot="{ item }">
            {{ item.name }}
          </template>
        </BTableColumn>
        <BTableColumn
          :data="list"
          label="calories"
        >
          <template v-slot="{ item }">
            {{ item.calories }}
          </template>
        </BTableColumn>

      </BTable>
    </div> -->

    <!-- <div class="w-full flex justify-center items-center h-full w-1/2">
      <BSkeleton />
      <BSkeleton variant="rectangular" />
      <BSkeleton variant="circular" />
      <BSkeleton variant="text" />
    </div> -->

    <!-- <div class="w-full flex flex-col justify-center items-center h-full w-1/2"> -->
    <!-- <BTooltip>test tooltip</BTooltip> -->
    <!-- <BSwitch label="left" /> -->
    <!-- <BTooltip position="right">test tooltip</BTooltip>
      <BTooltip position="bottom">test tooltip</BTooltip> -->
    <!-- </div> -->

    <!-- <div class="w-full flex flex-col justify-center items-center h-full w-1/2">
      <BFileInput
        label="helloworld"
        variant="error"
      />
    </div> -->

    <div class="w-full flex justify-center items-center h-full w-1/2">
      <BBadge
        class="m-2"
        label="helloworld"
      />
      <BBadge
        class="m-2"
        label="goodbye"
        size="xl"
        color="primary"
      />
      <BBadge
        class="m-2"
        label="goodbye"
        size="basic"
        color="success"
        variant="close_button"
      />
      <BBadge
        class="m-2"
        label="goodbye"
        size="basic"
        color="danger"
        variant="close_button"
      />
      <BBadge
        class="m-2"
        label="warning"
        size="basic"
        color="warning"
        variant="close_button"
      />
    </div>

    <div class="w-full flex justify-center items-center h-full w-1/2">
      <BSelect
        :data="list"
        field="name"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import BAccordion from '@/components/accordion/BAccordion.vue'
import BBadge from '@/components/Badge/BBadge.vue'
import BButton from '@/components/Button/BButton.vue'
import BCardModal from '@/components/CardModal/BCardModal.vue'
import BCheckbox from '@/components/Checkbox/BCheckbox.vue'
import BDropdown from '@/components/Dropdown/BDropdown.vue'
import BField from '@/components/Field/BField.vue'
import BFileInput from "@/components/FileInput/BFileInput.vue"
import BInput from '@/components/Input/BInput.vue'
import BLink from '@/components/Link/BLink.vue'
import BMessage from '@/components/Message/BMessage.vue'
import BNumberInput from '@/components/NumberInput/BNumberInput.vue'
import BRadio from '@/components/Radio/BRadio.vue'
import BSelect from '@/components/Select/BSelect.vue'
import BSkeleton from '@/components/Skeleton/BSkeleton.vue'
import BSwitch from '@/components/Switch/BSwitch.vue'
import BTable from '@/components/Table/BTable.vue'
import BTableColumn from '@/components/Table/BTableColumn.vue'
import BTag from '@/components/Tag/BTag.vue'
import BToast from '@/components/Toast/BToast.vue'
import BTooltip from '@/components/Tooltip/BTooltip.vue'

export default defineComponent({
  components: {
    BAccordion,
    BBadge,
    BButton,
    BCardModal,
    BCheckbox,
    BDropdown,
    BField,
    BFileInput,
    BInput,
    BLink,
    BMessage,
    BNumberInput,
    BRadio,
    BSelect,
    BSkeleton,
    BSwitch,
    BTable,
    BTableColumn,
    BTag,
    BToast,
    BTooltip,
  },
  name: 'App',
  setup() {
    const test = ref(true)
    const update = (val: boolean) => {
      test.value = val
    }

    const list = [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        value: true,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]


    return {
      test,
      update,
      list,
    }
  }
})
</script>
