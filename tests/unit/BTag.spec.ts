import BTag from '../../src/components/Tag/BTag.vue'
import { TagVariantsArray } from '../../src/types'
import { createWrapper } from './utils'

describe('BTag.vue', () => {
	it('renders the content of its default slot', () => {
		expect.assertions(1)
		const slotContent = 'tag'
		const wrapper = createWrapper(BTag, {
			slots: { default: slotContent }
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('renders with the appropriate classes based on the "variant" prop', () => {
		expect.assertions(TagVariantsArray.length + 1)

		const defaultWrapper = createWrapper(BTag)
		expect(defaultWrapper.element).toMatchSnapshot()

		TagVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BTag, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})
})
