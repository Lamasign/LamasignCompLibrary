export enum SwitchVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}
export const SwitchVariantsArray = Object.values(SwitchVariantsEnum).map(variant => variant)

export type SwitchVariantsMap = {
	[key in SwitchVariantsEnum]: string
}

export const commonClasses = 'rounded shadow-lg p-3'

export const SwitchVariantsMap: SwitchVariantsMap = {
	primary: `${commonClasses} bg-white text-dark hover:bg-blue-dark`,
	warning: `${commonClasses} bg-orange text-white hover:bg-orange-dark`,
	danger: `${commonClasses} bg-red text-white hover:bg-red-dark`,
	success: `${commonClasses} bg-green text-white hover:bg-green-dark`,
}
