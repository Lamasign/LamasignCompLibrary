export enum SelectColorsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'YELLOW' = 'yellow',
}

export const SelectColorsArray = Object.values(SelectColorsEnum).map(color => color)

export type SelectColorsMap = {
	[key in SelectColorsEnum]: string
}

const commonClasses = 'text-gray-900 select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white focus:outline-none focus:text-white'

export const SelectColorsMap: SelectColorsMap = {
	primary: `${commonClasses} hover:bg-blue focus:bg-blue`,
	warning: `${commonClasses} hover:bg-orange focus:bg-orange`,
	danger: `${commonClasses} hover:bg-red focus:bg-red`,
	success: `${commonClasses} hover:bg-green focus:bg-green`,
	yellow: `${commonClasses} hover:bg-yellow focus:bg-yellow-500`
}


