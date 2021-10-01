import { createWrapper } from "./utils"
import BSwitch from './components/Switch/BSwitch.vue'
import { SwitchVariantsArray } from '../../src/types'

describe('BSwitch.vue', () => {
	it('renders correct variant based on variant props', () => {
		expect.assertions(SwitchVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BSwitch)

		expect(defaultWrapper.element).toMatchSnapshot()

		SwitchVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BSwitch, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('Render correct value for props label ', async () => {
		const label = 'test Label'
		const wrapper = createWrapper(BSwitch)
		await wrapper.setProps({ label })
		expect(wrapper.props().label).toEqual(label)
	})

	it('emits a click "event" when the BSwitch is clicked', async () => {
		const wrapper = createWrapper(BSwitch)
		await wrapper.find('input').trigger('click')
		expect(wrapper.emitted().switch).toBeTruthy()
	})

})