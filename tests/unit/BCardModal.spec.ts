import { createWrapper } from "./utils"
import BCardModal from '../../src/components/CardModal/BCardModal.vue'

describe('BCardModal', () => {
	it('isActive is false by default', () => {
		const wrapper = createWrapper(BCardModal)
		expect(wrapper.props().isActive).toEqual(false)
	})

	it('Emit close event on click button', async () => {
		const wrapper = createWrapper(BCardModal)
		expect(wrapper.props().isActive).toEqual(false)
		await wrapper.setProps({ isActive: true })
		expect(wrapper.props().isActive).toEqual(true)

		await wrapper.find('button').trigger('click')
		expect(wrapper.emitted('close')).toBeTruthy()
	})

	it('renders content slot for default slot', async () => {
		expect.assertions(1)
		const slotContent = "content slot"
		const wrapper = createWrapper(BCardModal, {
			slots: {
				default: slotContent
			}
		})
		await wrapper.setProps({ isActive: true })
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('render contant slot for title slot', async () => {
		expect.assertions(1)
		const slotContent = "content slot"
		const wrapper = createWrapper(BCardModal, {
			slots: {
				title: slotContent
			}
		})
		await wrapper.setProps({ isActive: true })
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('render contant slot for footer slot', async () => {
		expect.assertions(1)
		const slotContent = "content slot"
		const wrapper = createWrapper(BCardModal, {
			slots: {
				footer: slotContent
			}
		})
		await wrapper.setProps({ isActive: true })
		expect(wrapper.text()).toMatch(slotContent)
	})

})