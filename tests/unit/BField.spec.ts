import { createWrapper } from './utils'
import BField from '../../src/components/Field/BField.vue'
import { FieldStatusesArray } from '../../src/types'

describe('BField.vue', () => {

	it('renders the correct <label> based on "label" prop', () => {
		const label = 'test'
		const wrapper = createWrapper(BField, {
			propsData: {
				label
			}
		})
		expect(wrapper.find('label').text()).toEqual(label)
	})

	it('does not render a <label> if the "label" prop is null', () => {
		const wrapper = createWrapper(BField)
		expect(wrapper.find('label').element).toBeFalsy()
	})

	it('renders the <label> with the correct classes', () => {
		const wrapper = createWrapper(BField, {
			propsData: {
				label: 'label'
			}
		})
		expect(wrapper.element).toMatchSnapshot()
	})

	it('renders the content of its "label" slot if provided', () => {
		const label = 'labelSlot'
		const wrapper = createWrapper(BField, {
			slots: {
				label: `<span>${label}</span>`
			}
		})
		expect(wrapper.element).toMatchSnapshot()
		expect(wrapper.find('span').text()).toEqual(label)
	})

	it('renders the correct message based on the "message" prop', async () => {
		const successMessage = 'success'
		const errorMessage = 'error'
		const wrapper = createWrapper(BField, {
			propsData: {
				message: successMessage
			}
		})
		expect(wrapper.find('span').text()).toEqual(successMessage)

		await wrapper.setProps({ message: errorMessage })
		expect(wrapper.find('span').text()).toEqual(errorMessage)
	})

	it('does not render the message if the "message" prop is null', () => {
		const wrapper = createWrapper(BField, {
			propsData: {
				message: null
			}
		})
		expect(wrapper.find('span').element).toBeFalsy()
	})

	it('renders the message with the correct classes based on the "status" prop', () => {
		const defaultWrapper = createWrapper(BField, {
			propsData: {
				message: 'success'
			}
		})
		expect(defaultWrapper.element).toMatchSnapshot()

		FieldStatusesArray.forEach(status => {
			const wrapperWithStatus = createWrapper(BField, {
				propsData: {
					status,
					message: status
				}
			})
			expect(wrapperWithStatus.element).toMatchSnapshot()
		})
	})

	it('renders the content of its "message" slot if provided', () => {
		const message = 'messageSlot'
		const wrapper = createWrapper(BField, {
			slots: {
				message: `<span>${message}</span>`
			}
		})
		expect(wrapper.element).toMatchSnapshot()
		expect(wrapper.find('span').text()).toEqual(message)
	})

	it('adds the correct "for" attribute to its label based on the "labelFor" prop', () => {
		const testValue = 'myInput'
		const wrapper = createWrapper(BField, {
			propsData: {
				labelFor: testValue,
				label: 'label'
			}
		})
		expect(wrapper.element).toMatchSnapshot()
		expect(wrapper.find('label').attributes().for).toEqual(testValue)
	})

	it('adds the additional classes to its "label" based on the "extraLabelClasses" prop', () => {
		const testValue = 'myExtraClass'
		const wrapper = createWrapper(BField, {
			propsData: {
				label: 'label',
				extraLabelClasses: testValue
			}
		})

		expect(wrapper.element).toMatchSnapshot()
		expect(wrapper.find('label').classes()).toContain(testValue)
	})

	it('renders with the correct classes on its label based on the "status" prop', () => {
		const defaultWrapper = createWrapper(BField, {
			propsData: {
				label: 'success'
			}
		})
		expect(defaultWrapper.element).toMatchSnapshot()

		FieldStatusesArray.forEach(status => {
			const wrapperWithStatus = createWrapper(BField, {
				propsData: {
					status,
					label: status
				}
			})
			expect(wrapperWithStatus.element).toMatchSnapshot()
		})
	})

})