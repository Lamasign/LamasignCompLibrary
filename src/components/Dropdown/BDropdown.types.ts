export enum DropdownVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const DropdownVariantsArray = Object.values(DropdownVariantsEnum).map(variant => variant)

export type DropdownVariantsMap = {
	[key in DropdownVariantsEnum]: string
}

const commonClasses = 'font-bold text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full focus:ring-4'

export const DropdownVariantsMap: DropdownVariantsMap = {
	primary: `${commonClasses} bg-blue text-white font-normal hover:bg-blue-dark  ring-blue`,
	warning: `${commonClasses} bg-orange text-white hover:bg-orange-dark ring-orange`,
	danger: `${commonClasses} bg-red text-black hover:text-white hover:bg-red-light ring-red`,
	success: `${commonClasses} bg-green text-white hover:bg-green-dark ring-green`,
}

export enum DropdownDirectionEnum {
	LEFT = 'left',
	RIGHT = 'right',
	TOP = 'top',
	BOTTOM = 'bottom',
}

export type DropdownDirectionMap = {
	[key in DropdownDirectionEnum]: string
}

export const DropdownDirectionMap: DropdownDirectionMap = {
	left: '',
	right: '',
	top: '',
	bottom: '',
}
