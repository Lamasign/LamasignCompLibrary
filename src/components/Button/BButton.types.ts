// VARIANTS
export enum ButtonVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
}
export const ButtonVariantsArray = Object.values(ButtonVariantsEnum).map(variant => variant)

// TAGS
export enum ButtonTagsEnum {
	'BUTTON' = 'button',
	'ANCHOR' = 'a',
	'ROUTER_LINK' = 'router-link',
	'NUXT_LINK' = 'nuxt-link',
}
export type ButtonTags = `${ButtonTagsEnum}`
export const ButtonTagsArray = Object.values(ButtonTagsEnum).map(variant => variant)

// TYPES
export enum ButtonTypesEnum {
	'BUTTON' = 'button',
	'SUBMIT' = 'submit',
	'RESET' = 'reset'
}
export type ButtonTypes = `${ButtonTypesEnum}`
export const ButtonTypesArray = Object.values(ButtonTypesEnum).map(variant => variant)

// SIZES
export enum ButtonSizesEnum {
	'SMALL' = 'small',
	'DEFAULT' = 'default'
}
export type ButtonSizes = `${ButtonSizesEnum}`
export const ButtonSizesArray = Object.values(ButtonSizesEnum).map(variant => variant)

// Mapped Type to enforce class creation when adding a variant
// This will make TypeScript throw errors if a variant is added to the enum but the corresponding classes are not added to the map.
export type ButtonVariantsMap = {
	[key in ButtonVariantsEnum]: string
}

export type ButtonSizesMap = {
	[key in ButtonSizesEnum]: string
}

const commonClasses = 'uppercase rounded cursor-pointer disabled:cursor-not-allowed'

export const ButtonSizesMap: ButtonSizesMap = {
	default: `title-3 p-12 ${commonClasses}`,
	small: `title-4 p-8 ${commonClasses}`
}

export const ButtonVariantsMap: ButtonVariantsMap = {
	primary: 'bg-black text-white font-normal hover:bg-black-dark focus:ring-4 ring-black',
	warning: 'bg-orange text-white hover:bg-orange-dark focus:ring-4 ring-orange',
	danger: 'bg-red text-white hover:bg-red-dark focus:ring-4 ring-red',
	success: 'bg-green text-white hover:bg-green-dark focus:ring-4 ring-green',
	promotion: 'bg-purple text-white hover:text-white hover:bg-purple-dark focus:ring-4 ring-purple'
}

export const ButtonDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-black/50 text-white',
	warning: 'bg-orange/50 text-white',
	danger: 'bg-red/50 text-white',
	success: 'bg-green/50 text-white',
	promotion: 'bg-purple/50 text-white'
}

export const ButtonOutlinedClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-black border border-black hover:border-black-dark hover:text-black-dark focus:ring-4 ring-black',
	warning: 'bg-white text-orange border border-orange hover:border-orange-dark hover:text-orange-dark focus:ring-4 ring-orange',
	danger: 'bg-white text-red border border-red hover:border-red-dark hover:text-red-dark focus:ring-4 ring-red',
	success: 'bg-white text-green border border-green hover:border-green-dark hover:text-green-dark focus:ring-4 ring-green',
	promotion: 'bg-white text-purple border border-purple hover:border-purple-dark hover:text-purple-dark focus:ring-4 ring-purple'
}

export const ButtonOutlinedAndDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-black/50 border border-black/50',
	warning: 'bg-white text-orange/50 border border-orange/50',
	danger: 'bg-white text-red/50 border border-red/50',
	success: 'bg-white text-green/50 border border-green/50',
	promotion: 'bg-white text-purple/50 border border-purple/50'
}
