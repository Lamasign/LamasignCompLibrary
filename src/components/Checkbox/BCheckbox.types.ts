export enum CheckboxVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
}
export const CheckboxVariantsArray = Object.values(CheckboxVariantsEnum).map(variant => variant)

export type CheckboxVariantsMap = {
	[key in CheckboxVariantsEnum]: string
}

export const CheckboxsVariantsMap: CheckboxVariantsMap = {
	primary: `text-black hover:bg-blue-dark`,
	warning: `text-black hover:bg-orange-dark`,
	danger: `text-black hover:bg-red-dark`,
	success: `text-black hover:bg-green-dark`,
	promotion: `text-black hover:bg-violet-dark`
}
