import { BadgeColorsArray, BadgeSizesArray, BadgeVariantsArray } from '../../src/types'
import BBadge from './components/Badge/BBadge.vue'
import { createWrapper } from './utils'

describe('BBadge.vue', () => {
	it('render the appropritate classe based on the "variant" prop', () => {
		expect.assertions(BadgeVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BBadge)

		expect(defaultWrapper.element).toMatchSnapshot()

		BadgeVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BBadge, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('render the appropritate classe based on the "color" prop', () => {
		expect.assertions(BadgeColorsArray.length + 1)
		const defaultWrapper = createWrapper(BBadge)

		expect(defaultWrapper.element).toMatchSnapshot()

		BadgeColorsArray.forEach(color => {
			const wrapperWithProps = createWrapper(BBadge, {
				propsData: {
					color
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('render the appropritate classe based on the "size" prop', () => {
		expect.assertions(BadgeSizesArray.length + 1)
		const defaultWrapper = createWrapper(BBadge)

		expect(defaultWrapper.element).toMatchSnapshot()

		BadgeSizesArray.forEach(size => {
			const wrapperWithProps = createWrapper(BBadge, {
				propsData: {
					size
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})


	it('Render correct value for props label ', async () => {
		const label = 'test Label'
		const wrapper = createWrapper(BBadge)
		await wrapper.setProps({ label })
		expect(wrapper.props().label).toEqual(label)
	})

	it('emits a click "event" when the BBadge is clicked', async () => {
		const wrapper = createWrapper(BBadge, {
			propsData: {
				variant: 'close_button'
			}
		})
		await wrapper.find('button').trigger('click')
		expect(wrapper.emitted().close).toBeTruthy()
	})

})