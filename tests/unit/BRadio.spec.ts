import BRadio from '../../src/components/Radio/BRadio.vue'
import { Wrapper } from '@vue/test-utils'
import { createWrapper } from './utils'

describe('Bradio.vue', () => {
	let wrapper: Wrapper<Vue> | null = null
	const option = 'test option'

	beforeEach(() => {
		wrapper = createWrapper(BRadio, {
			propsData: {
				option,
			}
		})
	})

	it('render correct string passed on option prop', () => {
		expect(wrapper!.props().option).toEqual(option)
	})

	it('emits a changeinput" when the BRadio is change', async () => {
		await wrapper!.find('input').trigger('change')
		expect(wrapper!.emitted().input).toBeTruthy()
	})
})