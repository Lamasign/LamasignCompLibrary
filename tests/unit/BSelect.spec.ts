import { SelectColorsArray, SelectColorsEnum } from './../../src/components/Select/BSelect.types'
import BSelect from '@/components/Select/BSelect.vue'
import { createWrapper } from './utils'

describe('BSelect.vue', () => {
	const list = [
		{
			value: false,
			name: 'Frozen Yogurt',
			calories: 159,
			fat: 6.0,
			carbs: 24,
			protein: 4.0,
			iron: '1%'
		},
		{
			value: false,
			name: 'Ice cream sandwich',
			calories: 237,
			fat: 9.0,
			carbs: 37,
			protein: 4.3,
			iron: '1%'
		},
		{
			value: false,
			name: 'Eclair',
			calories: 262,
			fat: 16.0,
			carbs: 23,
			protein: 6.0,
			iron: '7%'
		},
		{
			value: true,
			name: 'Cupcake',
			calories: 305,
			fat: 3.7,
			carbs: 67,
			protein: 4.3,
			iron: '8%'
		},
		{
			value: false,
			name: 'Gingerbread',
			calories: 356,
			fat: 16.0,
			carbs: 49,
			protein: 3.9,
			iron: '16%'
		},
		{
			value: false,
			name: 'Jelly bean',
			calories: 375,
			fat: 0.0,
			carbs: 94,
			protein: 0.0,
			iron: '0%'
		},
		{
			value: false,
			name: 'Lollipop',
			calories: 392,
			fat: 0.2,
			carbs: 98,
			protein: 0,
			iron: '2%'
		},
		{
			value: false,
			name: 'Honeycomb',
			calories: 408,
			fat: 3.2,
			carbs: 87,
			protein: 6.5,
			iron: '45%'
		},
		{
			value: false,
			name: 'Donut',
			calories: 452,
			fat: 25.0,
			carbs: 51,
			protein: 4.9,
			iron: '22%'
		},
		{
			value: false,
			name: 'KitKat',
			calories: 518,
			fat: 26.0,
			carbs: 65,
			protein: 7,
			iron: '6%'
		}
	]

	it('render the content of his default slot', () => {
		expect.assertions(1)
		const slotContent = 'Select'
		const wrapper = createWrapper(BSelect, {
			slots: { SelectLabel: slotContent },
			propsData: {
				value: list[0],
				field: 'name',
				data: list,
			},
		})
		expect(wrapper.text()).toMatch(slotContent)
	})

	it('renders with the appropriate classes based on the "outlined" prop', async () => {
		expect.assertions(SelectColorsArray.length + 6)

		const defaultWrapper = createWrapper(BSelect, {
			propsData: {
				value: list[0],
				field: 'name',
				data: list,
			}
		})
		expect(defaultWrapper.element).toMatchSnapshot()

		await Promise.all(SelectColorsArray.map(async (color) => {
			const wrapperWithProps = createWrapper(BSelect, {
				propsData: {
					color,
					value: list[0],
					field: 'name',
					data: list,

				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
			return Promise.resolve(expect(wrapperWithProps.element).toMatchSnapshot())
		}))
	})

	it('emits a click "event" when the Select is clicked', async () => {
		const wrapper = createWrapper(BSelect, {
			propsData: {
				data: list,
				field: 'name',
				value: list[0],
			}
		})
		await wrapper.find('#openButton').trigger('click')
		expect(wrapper.emitted().open).toBeTruthy()
		expect(wrapper.find('div ul #listbox-label'))

		await wrapper.find('div ul li ').trigger('click')
		expect(wrapper.emitted().close).toBeTruthy()
	})
})