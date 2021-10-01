import { createWrapper } from './utils'
import BButton from './components/Button/BButton.vue'
import BNumberInput from './components/NumberInput/BNumberInput.vue'
import { FieldStatusesEnum, FIELD_STATUS_INJECTION_KEY, InputStatusesArray } from '../../src/types'

describe('BNumberInput.vue', () => {
	it('binds value prop to DOM value attribute', async () => {
		expect.assertions(2)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0
			}
		})
		// Required cast because Vue-test-utils don't infer HTML elements type yet (Vue 3 only)
		const element = wrapper.find('input').element as HTMLInputElement

		expect(element.value).toStrictEqual('0')

		await wrapper.setProps({ value: 1 })
		expect(element.value).toStrictEqual('1')
	})

	it('emits proper events on input value change', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0
			}
		})

		await wrapper.find('input').setValue(1)

		expect(wrapper.emitted('input')).toStrictEqual([[1]])
	})

	it('emits an event containing a string if the "value" prop is of type string', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: '1'
			}
		})

		await wrapper.find('input').setValue(23)
		expect(wrapper.emitted('input')).toStrictEqual([['23']])
	})

	it('emits an event containing a number if the "value" prop is of type number', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 1
			}
		})

		await wrapper.find('input').setValue(23)
		expect(wrapper.emitted('input')).toStrictEqual([[23]])
	})

	it('emits an event containing 0 if the content of the field is set to null', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0
			}
		})

		await wrapper.find('input').setValue(null)
		expect(wrapper.emitted('input')).toStrictEqual([[0]])
	})

	it('emits an event containing the value of its "min" prop if the value of the field is set to something lower', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0,
				min: -10
			}
		})

		await wrapper.find('input').setValue(-20)
		expect(wrapper.emitted('input')).toStrictEqual([[-10]])
	})

	it('emits an event containing the value of its "max" prop if the value of the field is set to something higher', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0,
				max: 10
			}
		})

		await wrapper.find('input').setValue(20)
		expect(wrapper.emitted('input')).toStrictEqual([[10]])
	})

	it('increments its inner value when the corresponding button is clicked', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 0
			}
		}, true)
		await wrapper.findAllComponents(BButton).at(1).trigger('click')
		expect(wrapper.emitted('input')).toStrictEqual([[1]])
	})

	it('decrements its inner value when the corresponding button is clicked', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			propsData: {
				value: 1
			}
		}, true)
		await wrapper.findAllComponents(BButton).at(0).trigger('click')
		expect(wrapper.emitted('input')).toStrictEqual([[0]])
	})

	// Todo: Find a way to properly test provide/inject because so far all snapshots are identical and vm[FIELD_STATUS_INJECTION_KEY] is undefined
	it('Receives the "Status" injected property', () => {
		// expect.assertions(1)
		const wrapper = createWrapper(BNumberInput, {
			provide: {
				[FIELD_STATUS_INJECTION_KEY]: FieldStatusesEnum.SUCCESS
			}
		})

		const provided = wrapper.vm.$options.provide as { [key: string]: string }

		expect(provided[FIELD_STATUS_INJECTION_KEY as string])
			.toStrictEqual(FieldStatusesEnum.SUCCESS)
	})

	it('Renders with the correct classes based on the value of the injected "Status"', async () => {
		const defaultWrapper = createWrapper(BNumberInput, {
			provide: {
				[FIELD_STATUS_INJECTION_KEY]: FieldStatusesEnum.DEFAULT
			}
		})
		expect(defaultWrapper.element).toMatchSnapshot()

		await Promise.all(InputStatusesArray.map(status => {
			const wrapperWithInjection = createWrapper(BNumberInput, {
				provide: {
					[FIELD_STATUS_INJECTION_KEY]: status
				}
			}, true)
			return Promise.resolve(expect(wrapperWithInjection.element).toMatchSnapshot())
		}))
	})
})
