import { CheckboxVariantsArray } from '../../src/types'
import BCheckbox from './components/Checkbox/BCheckbox.vue'
import { createWrapper } from './utils'

describe('Test BCheckbox.vue', () => {
	it('render default value of props', () => {
		const wrapper = createWrapper(BCheckbox)
		expect(wrapper.props().value).toEqual(false)
		expect(wrapper.props().label).toEqual('')
		expect(wrapper.props().disabled).toEqual(false)
	})

	it('render correct prop value after update them', () => {
		const wrapper = createWrapper(BCheckbox, {
			propsData: {
				value: true,
				label: 'test',
				disabled: true,
			}
		})
		expect(wrapper.props().value).toEqual(true)
		expect(wrapper.props().label).toEqual('test')
		expect(wrapper.props().disabled).toEqual(true)
	})

	it('render correct value and html element checked, when component is checked', async () => {
		const wrapper = createWrapper(BCheckbox)
		const checkbox = wrapper.find('input[type="checkbox"]')
		await checkbox.setChecked(true)
		expect(wrapper.props().value).toEqual(false)
		checkbox.trigger('click')
		checkbox.trigger('change')
		expect(wrapper.emitted('input')).toBeTruthy()
	})

	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(CheckboxVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BCheckbox)

		expect(defaultWrapper.element).toMatchSnapshot()

		CheckboxVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BCheckbox, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

})