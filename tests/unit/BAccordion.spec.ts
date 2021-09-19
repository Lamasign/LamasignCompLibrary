import { AccordionVariantsArray } from './../../src/components/accordion/BAccordion.types';
import BAccordion from '@/components/accordion/BAccordion.vue'
import { createWrapper } from './utils'

describe('BAccordion.vue', () => {
	it('renders the content of his default slot', () => {
		expect.assertions(1)
		const slotContent = "content slot"
		const wrapper = createWrapper(BAccordion, {
			slots: {
				default: slotContent
			}
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('renders the right classes based on prop called "variant"', () => {
		expect.assertions(AccordionVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BAccordion)
		expect(defaultWrapper.element).toMatchSnapshot()
		AccordionVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BAccordion, {
				propsData: {
					variant,
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('emit click "event open" when Accordion title is clicked', async () => {
		const wrapper = createWrapper(BAccordion)
		expect(wrapper.classes('d-block')).toBe(false)
		await wrapper.find('button').trigger('click')
		const open = wrapper.emitted('open')
		expect(open).toBeTruthy()
	})
})