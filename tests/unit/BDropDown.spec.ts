import { createWrapper } from './utils'
import BDropdown from './components/Dropdown/BDropdown.vue'
import { DropdownVariantsArray } from '../../src/types'

describe('BDropdown.vue', () => {
	const title = 'Dropdown title'

	it('render the content of his default slot', () => {
		expect.assertions(2)
		const slotContent = 'Content slot'
		const wrapper = createWrapper(BDropdown, {
			slots: { default: slotContent },
			propsData: { title },
		})
		expect(wrapper.text()).toMatch(slotContent)
		expect(wrapper.props().title).toEqual(title)
	})

	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(DropdownVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BDropdown, {
			propsData: { title },
		})

		expect(defaultWrapper.element).toMatchSnapshot()

		DropdownVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BDropdown, {
				propsData: {
					variant,
					title,
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('emit a click event when dropdown title is clicked', async () => {
		const wrapper = createWrapper(BDropdown, {
			propsData: { title },
		})
		expect(wrapper.props().title).toEqual(title)
		expect(wrapper.html()).toContain('hidden')
		await wrapper.find('button').trigger('click')
		expect(wrapper.emitted('toggleDropdown')).toBeTruthy()
		expect(wrapper.html()).toContain('block')
	})
})