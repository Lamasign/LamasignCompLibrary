export enum BadgeColorsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PURPLE' = 'purple',
	'DEFAULT' = 'default',
}
export const BadgeColorsArray = Object.values(BadgeColorsEnum).map(variant => variant)

// Mapped Type to enforce class creation when adding a variant
// This will make TypeScript throw errors if a variant is added to the enum but the corresponding classes are not added to the map.
export type BadgeColorsMap = {
	[key in BadgeColorsEnum]: string
}

const commonClasses = 'flex justify-center items-center space-x-1 px-2 font-medium rounded-full py-1'

export const BadgesColorsMap: BadgeColorsMap = {
	primary: `${commonClasses} bg-blue text-white hover:bg-blue-dark`,
	warning: `${commonClasses} bg-orange text-white hover:bg-orange-dark`,
	danger: `${commonClasses} bg-red text-white hover:bg-red-dark`,
	success: `${commonClasses} bg-green text-white hover:bg-green-dark`,
	purple: `${commonClasses} bg-violet text-white hover:bg-violet-dark`,
	default: `${commonClasses} bg-gray-500 text-white`
}

export enum BadgeVariantsEnum {
	'BASIC' = 'basic',
	'CLOSE_BUTTON' = "close_button",
}
export const BadgeVariantsArray = Object.values(BadgeVariantsEnum).map(variant => variant)

export type BadgeVariantsMap = {
	[key in BadgeVariantsEnum]: string
}

export enum BadgeSizeEnum {
	'XS' = 'xs',
	'SM' = 'sm',
	'BASE' = 'base',
	'LG' = 'lg',
	'XL' = 'xl',
	'2XL' = '2xl',
	'3XL' = '3xl',
}

export const BadgeSizesArray = Object.values(BadgeSizeEnum).map(size => size)

export type BadgeSizesMap = {
	[key in BadgeSizeEnum]: string
}

export const BadgesSizesMap: BadgeSizesMap = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
}
