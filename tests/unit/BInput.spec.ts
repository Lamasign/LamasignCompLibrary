import { createWrapper } from './utils'
import BInput from '@/components/Input/BInput.vue'
import { InputTypesArray } from '@/components/Input/BInput.types'

describe('BInput', () => {
	it('binds value prop to DOM value attribute', async () => {
		expect.assertions(2)
		const wrapper = createWrapper(BInput, {
			propsData: {
				value: 'hello'
			}
		})
		// Required cast because Vue-test-utils don't infer HTML elements type yet (Vue 3 only)
		const element = wrapper.find('input').element as HTMLInputElement

		expect(element.value)
			.toStrictEqual('hello')

		await wrapper.setProps({ value: 'byebye' })
		expect(element.value)
			.toStrictEqual('byebye')
	})

	it('emits proper events on change', async () => {
		expect.assertions(1)
		const wrapper = createWrapper(BInput, {
			propsData: {
				value: 'hello'
			}
		})

		await wrapper.find('input')
			.setValue('hello again!')

		expect(wrapper.emitted('input'))
			.toStrictEqual([['hello again!']])
	})

	it('renders the <input /> with a correct "type" attribute based on the "type prop"', () => {
		const defaultWrapper = createWrapper(BInput)
		expect(defaultWrapper.find('input').attributes().type).toEqual('text')

		InputTypesArray.forEach(type => {
			const wrapperWithProps = createWrapper(BInput, {
				propsData: {
					type
				}
			})
			expect(wrapperWithProps.find('input').attributes().type).toEqual(type)
		})
	})

})