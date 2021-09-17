export enum NumberInputStatusesEnum {
	WARNING = 'warning',
	ERROR = 'error',
	SUCCESS = 'success',
	DEFAULT = 'default'
}
export type NumberInputStatusesTypes = `${NumberInputStatusesEnum}`
export const NumberInputStatusesArray = Object.values(NumberInputStatusesEnum).map(status => status)

export type NumberInputStatusesClassesMap = {
	[key in NumberInputStatusesEnum]: string
}

const commonClasses = 'p-3 border rounded text-grey disabled:border-grey disabled:bg-grey-light focus:outline-none'

export const NumberInputStatusesClassesMap: NumberInputStatusesClassesMap = {
	default: `${commonClasses} border-blue hover:border-blue-dark focus:ring-2 ring-blue`,
	error: `${commonClasses} border-red hover:border-red-dark focus:ring-2 ring-red`,
	success: `${commonClasses} border-green hover:border-green-dark focus:ring-2 ring-green`,
	warning: `${commonClasses} border-orange hover:border-orange-dark focus:ring-2 ring-orange`
}
