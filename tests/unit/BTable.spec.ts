import { createWrapper } from "./utils"
import BTable from '@/components/Table/BTable.vue'
import BTableColumn from '@/components/Table/BTableColumn.vue'
import { TableColumnVariantsArray } from "@/components/Table/BTable.types"

describe('Btable folder', () => {
	it('render comp Btable with correct classes', () => {
		const wrapper = createWrapper(BTable)
		expect(wrapper.html()).toContain('<table class="flex shadow-lg bg-white">')
	})

	it('render correct slot content on default slot', () => {
		const slotContent = 'TESTING'
		const wrapper = createWrapper(BTable, {
			slots: {
				default: slotContent
			}
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('render comp BTableColumn with correct classe', () => {
		expect.assertions(TableColumnVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BTableColumn)

		expect(defaultWrapper.element).toMatchSnapshot()

		TableColumnVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BTableColumn, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders the correct <label> based on "label" prop', () => {
		const label = 'test de la prop label'
		const wrapper = createWrapper(BTableColumn, {
			propsData: {
				label
			}
		})
		expect(wrapper.html()).toContain(label)
		expect(wrapper.props().label).toEqual(label)
	})
})
