import { ButtonSizesEnum, ButtonTypesArray, ButtonVariantsArray } from './../../src/components/Button/BButton.types'
import BButton from '@/components/Button/BButton.vue'
import { mount } from "@vue/test-utils"
import { createWrapper } from './utils'

describe('BButton.vue', () => {
	it('render the content of his default slot', () => {
		expect.assertions(1)
		const slotContent = 'button'
		const wrapper = mount(BButton, {
			slots: { default: slotContent }
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(ButtonVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BButton)

		expect(defaultWrapper.element).toMatchSnapshot()

		ButtonVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BButton, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders right html type based on props called "type"', () => {
		expect.assertions(ButtonTypesArray.length + 1)
		const defaultWrapper = createWrapper(BButton)
		expect(defaultWrapper.find('button').attributes().type).toEqual('button')
		ButtonTypesArray.forEach(type => {
			const wrapperWithProps = createWrapper(BButton, {
				propsData: {
					type
				}
			})
			expect(wrapperWithProps.find('button').attributes().type).toEqual(type)
		})
	})

	it('renders with the appropriate classes based on the "outlined" prop', async () => {
		expect.assertions(ButtonVariantsArray.length * 2 + 2)

		const defaultWrapper = createWrapper(BButton)
		expect(defaultWrapper.element).toMatchSnapshot()

		await defaultWrapper.setProps({ outlined: true })
		expect(defaultWrapper.element).toMatchSnapshot()

		await Promise.all(ButtonVariantsArray.map(async (variant) => {
			const wrapperWithProps = createWrapper(BButton, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			await wrapperWithProps.setProps({ outlined: true })
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))
	})

	it('renders with the appropriate classes based on the "size" prop', async () => {
		const defaultWrapper = createWrapper(BButton)
		expect(defaultWrapper.element).toMatchSnapshot()

		await defaultWrapper.setProps({ size: ButtonSizesEnum.SMALL })
		expect(defaultWrapper.element).toMatchSnapshot()
	})

	it('renders with the appropriate classses based on the "disabled" prop', async () => {
		const defaultWrapper = createWrapper(BButton)
		expect(defaultWrapper.element).toMatchSnapshot()

		await defaultWrapper.setProps({ disabled: true })
		expect(defaultWrapper.element).toMatchSnapshot()

		// Disabled with no Outline
		await Promise.all(ButtonVariantsArray.map(async (variant) => {
			const wrapperWithProps = createWrapper(BButton, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			await wrapperWithProps.setProps({ disabled: true })
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))

		// Disabled with Outline
		await Promise.all(ButtonVariantsArray.map(async (variant) => {
			const wrapperWithProps = createWrapper(BButton, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			await wrapperWithProps.setProps({ disabled: true, outlined: true })
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))
	})

	it('emits a click "event" when the button is clicked', async () => {
		const wrapper = createWrapper(BButton)
		await wrapper.find('button').trigger('click')
		expect(wrapper.emitted().click).toBeTruthy()
	})
})