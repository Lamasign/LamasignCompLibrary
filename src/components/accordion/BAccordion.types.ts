export enum AccordionVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const AccordionVariantsArray = Object.values(AccordionVariantsEnum).map(variant => variant)

export type AccordionVariantsMap = {
	[key in AccordionVariantsEnum]: string
}

export const AccordionVariantsMap: AccordionVariantsMap = {
	primary: `bg-white text-dark hover:bg-blue-dark rounded cursor-pointer`,
	warning: `bg-orange text-white hover:bg-orange-dark rounded cursor-pointer`,
	danger: `bg-red text-white hover:bg-red-dark rounded cursor-pointer`,
	success: `bg-green text-white hover:bg-green-dark rounded cursor-pointer`,
}
