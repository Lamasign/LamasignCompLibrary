export enum TooltipVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const TooltipVariantsArray = Object.values(TooltipVariantsEnum).map(variant => variant)

export type TooltipVariantsMap = {
	[key in TooltipVariantsEnum]: string
}

export enum TooltipPositionEnum {
	'TOP' = 'top',
	'BOTTOM' = 'bottom',
	'LEFT' = 'left',
	'RIGHT' = 'right',
}

export const TooltipPositionsArray = Object.values(TooltipPositionEnum).map(position => position)

export type TooltipPositionsMap = {
	[key in TooltipPositionEnum]: string
}

export const TooltipPositionsMap: TooltipPositionsMap = {
	top: 'mb-3',
	bottom: 'mt-8',
	left: '-ml-24',
	right: 'ml-124',
}

export const commonClasses = 'tooltip rounded shadow-lg p-3'

export const TooltipVariantsMap: TooltipVariantsMap = {
	primary: `${commonClasses} bg-white text-dark hover:bg-blue-dark`,
	warning: `${commonClasses} bg-orange text-white hover:bg-orange-dark`,
	danger: `${commonClasses} bg-red text-white hover:bg-red-dark`,
	success: `${commonClasses} bg-green text-white hover:bg-green-dark`,
}
