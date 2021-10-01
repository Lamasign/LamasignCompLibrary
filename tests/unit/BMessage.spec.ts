import { createWrapper } from './utils'
import BMessage from '../../src/components/Message/BMessage.vue'
import { MessageVariantsArray } from '../../src/types'

describe('BMessage.vue', () => {
	it('renders with the correct classes based on the "variant" prop', () => {
		const defaultWrapper = createWrapper(BMessage)
		expect(defaultWrapper.element).toMatchSnapshot()

		MessageVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BMessage, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders the content of its default slot', () => {
		expect.assertions(1)
		const slotContent = 'message'
		const wrapper = createWrapper(BMessage, {
			slots: { default: slotContent }
		})
		expect(wrapper.text()).toMatch(slotContent)
	})
})
