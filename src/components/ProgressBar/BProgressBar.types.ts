export enum ProgressBarVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const ProgressBarVariantsArray = Object.values(ProgressBarVariantsEnum).map(variant => variant)

export type ProgressBarVariantsMap = {
	[key in ProgressBarVariantsEnum]: string
}

const commonClasses = 'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center'

export const ProgressBarVariantsMap: ProgressBarVariantsMap = {
	primary: `${commonClasses} bg-blue text-white font-normal ring-blue`,
	warning: `${commonClasses} bg-orange text-white ring-orange`,
	danger: `${commonClasses} bg-red text-black ring-red`,
	success: `${commonClasses} bg-green text-white ring-green`,
}

const commonLightClasses = 'overflow-hidden h-3 mb-4 text-xs flex rounded'

export const ProgressBarLightVariantsMap: ProgressBarVariantsMap = {
	primary: `${commonLightClasses} bg-blue-light`,
	warning: `${commonLightClasses} bg-orange-light`,
	danger: `${commonLightClasses} bg-red-light`,
	success: `${commonLightClasses} bg-green-light`,
}

export enum ProgressBarProgressionStepEnum {
	'0%' = 'w-0',
	'25%' = 'w-1/4',
	'33%' = 'w-1/3',
	'40%' = 'w-5/12',
	'50%' = 'w-1/2',
	'60%' = 'w-8/12',
	'75%' = 'w-9/12',
	'83%' = 'w-10/12',
	'100%' = 'w-full',
}

export const ProgressBarProgressionStepArray = Object.values(ProgressBarProgressionStepEnum).map(step => step)