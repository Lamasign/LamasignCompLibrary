import { createWrapper } from "./utils"
import BSkeleton from './components/Skeleton/BSkeleton.vue'
import { SkeletonAnimationsArray, SkeletonColorsArray, SkeletonVariantsArray } from '../../src/types'

describe('BSkeleton.vue', () => {
	it('renders correct variant based on variant props', () => {
		expect.assertions(SkeletonVariantsArray.length + 1)
		const defaultWrapper = createWrapper(BSkeleton)

		expect(defaultWrapper.element).toMatchSnapshot()

		SkeletonVariantsArray.forEach(variant => {
			const wrapperWithProps = createWrapper(BSkeleton, {
				propsData: {
					variant
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders correct variant based on variant props', () => {
		expect.assertions(SkeletonColorsArray.length + 1)
		const defaultWrapper = createWrapper(BSkeleton)

		expect(defaultWrapper.element).toMatchSnapshot()

		SkeletonColorsArray.forEach(Color => {
			const wrapperWithProps = createWrapper(BSkeleton, {
				propsData: {
					Color
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})

	it('renders correct variant based on variant props', () => {
		expect.assertions(SkeletonAnimationsArray.length + 1)
		const defaultWrapper = createWrapper(BSkeleton)

		expect(defaultWrapper.element).toMatchSnapshot()

		SkeletonAnimationsArray.forEach(Animation => {
			const wrapperWithProps = createWrapper(BSkeleton, {
				propsData: {
					Animation
				}
			})
			expect(wrapperWithProps.element).toMatchSnapshot()
		})
	})


})