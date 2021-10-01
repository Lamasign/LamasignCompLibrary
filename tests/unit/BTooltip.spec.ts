import { TooltipPositionsArray, TooltipVariantsArray } from '../../src/types'
import BTooltip from './components/Tooltip/BTooltip.vue'
import { createWrapper } from './utils'

describe('Btooltip.vue', () => {
	it('Render correct value for props message ', async () => {
		const message = 'test message'
		const wrapper = createWrapper(BTooltip)
		await wrapper.setProps({ message })
		expect(wrapper.props().message).toEqual(message)
	})

	it('render the content of his default slot', () => {
		expect.assertions(1)
		const slotContent = 'button'
		const wrapper = createWrapper(BTooltip, {
			slots: { default: slotContent }
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(TooltipVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BTooltip)

		expect(defaultWrapper.element).toMatchSnapshot()

		TooltipVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BTooltip, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(TooltipPositionsArray.length + 1)
		const defaultWrapper = createWrapper(BTooltip)

		expect(defaultWrapper.element).toMatchSnapshot()

		TooltipPositionsArray.forEach(position => {
			const wrapperWithProps = createWrapper(BTooltip, {
				propsData: {
					position
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})
})