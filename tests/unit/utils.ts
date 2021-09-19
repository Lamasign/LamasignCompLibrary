import { createLocalVue, mount, shallowMount, ThisTypedMountOptions, VueClass, Wrapper } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import { VueConstructor } from 'vue/types/umd'

export function createTestVue(): VueConstructor<Vue> {
	const localVue = createLocalVue()
	localVue.use(VueCompositionApi)
	return localVue
}

export function createWrapper<V extends Vue>(component: VueClass<V>, options: ThisTypedMountOptions<V> = {}, noShallow = false): Wrapper<Vue> {
	const mountingOptions = {
		localVue: createTestVue(),
		...options
	}
	if (noShallow) {
		return mount(component, mountingOptions)
	}
	return shallowMount(component, mountingOptions)
}
