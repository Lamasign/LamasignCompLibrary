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
	default: `title-3 p-3 ${commonClasses}`,
	small: `title-4 p-2 ${commonClasses}`
}

export const ButtonVariantsMap: ButtonVariantsMap = {
	primary: 'bg-blue text-white font-normal hover:bg-blue-dark focus:ring-4 ring-blue',
	warning: 'bg-orange text-white hover:bg-orange-dark focus:ring-4 ring-orange',
	danger: 'bg-red text-black hover:text-white hover:bg-red-light focus:ring-4 ring-red',
	success: 'bg-green text-white hover:bg-green-dark focus:ring-4 ring-green',
	promotion: 'bg-purple text-white hover:text-white hover:bg-purple-dark focus:ring-4 ring-purple'
}

export const ButtonDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-blue/50 text-white',
	warning: 'bg-orange/50 text-white',
	danger: 'bg-red/50 text-white',
	success: 'bg-green/50 text-white',
	promotion: 'bg-purple/50 text-white'
}

export const ButtonOutlinedClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-blue border border-blue hover:border-blue-dark hover:text-blue-dark focus:ring-4 ring-blue',
	warning: 'bg-white text-orange border border-orange hover:border-orange-dark hover:text-orange-dark focus:ring-4 ring-orange',
	danger: 'bg-white text-red border border-red hover:border-red-light hover:text-red-light focus:ring-4 ring-red',
	success: 'bg-white text-green border border-green hover:border-green-dark hover:text-green-dark focus:ring-4 ring-green',
	promotion: 'bg-white text-purple border border-purple hover:border-purple-dark hover:text-purple-dark focus:ring-4 ring-purple'
}

export const ButtonOutlinedAndDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-blue/50 border border-blue/50',
	warning: 'bg-white text-orange/50 border border-orange/50',
	danger: 'bg-white text-red/50 border border-red/50',
	success: 'bg-white text-green/50 border border-green/50',
	promotion: 'bg-white text-purple/50 border border-purple/50'
}
