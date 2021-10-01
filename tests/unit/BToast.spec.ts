import { ToastVariantsArray } from '../../src/types'
import { createWrapper } from './utils'
import BToast from './components/Toast/BToast.vue'

describe('BToast.vue', () => {
	it('it renders right classes from props called variant', () => {
		expect.assertions(ToastVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BToast)
		expect(defaultWrapper.element).toMatchSnapshot()

		ToastVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BToast, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('emit click to close toast', () => {
		const wrapper = createWrapper(BToast)
		wrapper.find('button').trigger('click')
		const close = wrapper.emitted('close')
		expect(close).toBeTruthy()
	})

	it('watcher opdate computed value is visible change when props change', async () => {
		const wrapper = createWrapper(BToast)
		expect(wrapper.html()).toContain('Toast')
		expect(wrapper.isVisible()).toBeTruthy()
		setTimeout(() => expect(wrapper.emitted('close')).toBeTruthy(), 3000)
		await wrapper.setProps({ isToastOpen: false })
		expect(wrapper.html()).not.toContain('Toast')
		expect(wrapper.isVisible()).toBeFalsy()
	})
})