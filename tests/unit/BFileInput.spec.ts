import BFileInput from '../../src/components/FileInput/BFileInput.vue'
import { InputFileStatusesArray, InputFileStatusesEnum } from '../../src/types'
import { createWrapper } from './utils'

describe('BFileInput.vue', () => {
	it('render correct html template', () => {
		const wrapper = createWrapper(BFileInput)
		expect(wrapper.html())
			.toContain("<label class=\"w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border cursor-pointer hover:text-white ease-linear transition-all duration-150 border-blue text-blue hover:border-blue-dark focus:ring-2 ring-blue\">")
	})

	it('render correct label based on prop "label"', () => {
		const label = 'test'
		const wrapper = createWrapper(BFileInput, {
			propsData: {
				label,
			}
		})
		expect(wrapper.props().label).toEqual(label)
	})

	it('renders with the appropriate classes based on the "disabled" prop', async () => {
		const defaultWrapper = createWrapper(BFileInput)
		expect(defaultWrapper.element).toMatchSnapshot()

		await defaultWrapper.setProps({ disabled: true })
		expect(defaultWrapper.element).toMatchSnapshot()

		await Promise.all(InputFileStatusesArray.map(async (variant) => {
			const wrapperWithProps = createWrapper(BFileInput, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			await wrapperWithProps.setProps({ disabled: true })
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))
	})

	it('emit correecrt event', async () => {
		const wrapper = createWrapper(BFileInput)
		await wrapper.find('input').trigger('change')
		expect(wrapper.emitted().uploadFile).toBeTruthy()
	})
})