export enum SkeletonVariantsEnum {
	'TEXT' = 'text',
	'CIRCULAR' = 'circular',
	'RECTANGULAR' = 'rectangular',
	'LINE' = 'line',
}

export const SkeletonVariantsArray = Object.values(SkeletonVariantsEnum).map(variant => variant)

export type SkeletonVariantsMap = {
	[key in SkeletonVariantsEnum]: string
}

export const SkeletonVariantsMap: SkeletonVariantsMap = {
	line: 'leading-relaxed mb-3 w-full h-3 animate-pulse',
	circular: 'leading-relaxed rounded-full mb-3 w-24 h-24 animate-pulse',
	rectangular: 'lg:h-48 leading-relaxed animate-pulse md:h-36 w-full object-cover object-center',
	text: 'leading-relaxed mb-3 h-3',
}


export enum SkeletonColorsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PLACEHOLDER' = 'placeholder',
}

export const SkeletonColorsArray = Object.values(SkeletonColorsEnum).map(variant => variant)

export type SkeletonColorsMap = {
	[key in SkeletonColorsEnum]: string
}

export const SkeletonColorsMap: SkeletonColorsMap = {
	primary: 'bg-blue-light',
	warning: 'bg-orange-light',
	danger: 'bg-red-light',
	success: 'bg-green-light',
	placeholder: 'bg-gray-300'
}

export enum SkeletonAnimationsEnum {
	'WAVE' = 'wave',
	'PULSE' = 'pulse',
}

export const SkeletonAnimationsArray = Object.values(SkeletonAnimationsEnum).map(variant => variant)

export type SkeletonAnimationsMap = {
	[key in SkeletonAnimationsEnum]: string
}

export const SkeletonAnimationsMap: SkeletonAnimationsMap = {
	wave: 'animation-wave',
	pulse: 'animation-pulse',
}


