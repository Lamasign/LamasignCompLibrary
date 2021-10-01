import { createWrapper } from './utils'
import BLink from './components/Link/BLink.vue'
import { LinkVariantsArray } from '../../src/types'

describe('BLink.vue', () => {
	it('renders the content of its default slot', () => {
		expect.assertions(1)
		const slotContent = 'link'
		const wrapper = createWrapper(BLink, {
			slots: {
				default: slotContent
			}
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('renders with the appropriate classes based on the "variant" prop', () => {
		expect.assertions(LinkVariantsArray.length + 1)

		const defaultWrapper = createWrapper(BLink)
		expect(defaultWrapper.element).toMatchSnapshot()

		LinkVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BLink, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders with the appropriate classes based on the "disabled" prop', async () => {
		const defaultWrapper = createWrapper(BLink)
		expect(defaultWrapper.element).toMatchSnapshot()

		await defaultWrapper.setProps({ disabled: true })
		expect(defaultWrapper.element).toMatchSnapshot()

		await Promise.all(LinkVariantsArray.map(async (variant) => {
			const wrapperWithProps = createWrapper(BLink, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			await wrapperWithProps.setProps({ disabled: true })
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))
	})

	it('emits a click "event" when the link is clicked', async () => {
		const wrapper = createWrapper(BLink)
		await wrapper.find('a').trigger('click')
		expect(wrapper.emitted().click).toBeTruthy()
	})
})
