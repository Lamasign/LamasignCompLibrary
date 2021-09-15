// VARIANTS
export enum MessageVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
}
export const MessageVariantsArray = Object.values(MessageVariantsEnum).map(variant => variant)

// Mapped Type to enforce class creation when adding a variant
// This will make TypeScript throw errors if a variant is added to the enum but the corresponding classes are not added to the map.
export type MessageVariantsMap = {
	[key in MessageVariantsEnum]: string
}

const commonClasses = 'p-24 rounded'

export const MessageVariantsMap: MessageVariantsMap = {
	primary: `${commonClasses} bg-blue-light border border-blue text-blue-dark`,
	warning: `${commonClasses} bg-orange-light border border-orange text-orange-dark`,
	danger: `${commonClasses} bg-red-light border border-red text-red-dark`,
	success: `${commonClasses} bg-green-light border border-green text-green-dark`,
	promotion: `${commonClasses} bg-violet-light border border-violet text-violet-dark`
}
