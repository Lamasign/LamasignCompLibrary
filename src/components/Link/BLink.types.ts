// VARIANTS
export enum LinkVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
}
export const LinkVariantsArray = Object.values(LinkVariantsEnum).map(variant => variant)

// Mapped Type to enforce class creation when adding a variant
// This will make TypeScript throw errors if a variant is added to the enum but the corresponding classes are not added to the map.
export type LinkVariantsMap = {
	[key in LinkVariantsEnum]: string
}

// TAGS
export enum LinkTagsEnum {
	'BUTTON' = 'button',
	'ANCHOR' = 'a',
	'ROUTER_LINK' = 'router-link',
	'NUXT_LINK' = 'nuxt-link',
}
export type LinkTags = `${LinkTagsEnum}`
export const LinkTagsArray = Object.values(LinkTagsEnum).map(variant => variant)

const commonClasses = 'underline cursor-pointer disabled:cursor-not-allowed'

export const LinkVariantsMap: LinkVariantsMap = {
	primary: `${commonClasses} text-blue hover:text-blue-dark focus:ring-4 ring-blue`,
	warning: `${commonClasses} text-orange hover:text-orange-dark focus:ring-4 ring-orange`,
	danger: `${commonClasses} text-red hover:text-red-dark focus:ring-4 ring-red`,
	success: `${commonClasses} text-green hover:text-green-dark focus:ring-4 ring-green`,
	promotion: `${commonClasses} text-purple hover:text-purple-dark focus:ring-4 ring-purple`
}

export const LinkDisabledClassesMap: LinkVariantsMap = {
	primary: `${commonClasses} text-blue/50`,
	warning: `${commonClasses} text-orange/50`,
	danger: `${commonClasses} text-red/50`,
	success: `${commonClasses} text-green/50`,
	promotion: `${commonClasses} text-purple/50`
}
