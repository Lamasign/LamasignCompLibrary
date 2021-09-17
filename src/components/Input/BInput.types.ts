export enum InputTypesEnum {
	EMAIL = 'email',
	PASSWORD = 'password',
	SEARCH = 'search',
	TEXT = 'text',
	TEL = 'tel',
	URL = 'url',
	DATE = 'date',
	DATETIME_LOCAL = 'datetime-local'
}
export type InputTypes = `${InputTypesEnum}`
export const InputTypesArray = Object.values(InputTypesEnum).map(status => status)

export enum InputStatusesEnum {
	WARNING = 'warning',
	ERROR = 'error',
	SUCCESS = 'success',
	DEFAULT = 'default'
}
export type InputStatusesTypes = `${InputStatusesEnum}`
export const InputStatusesArray = Object.values(InputStatusesEnum).map(status => status)

export type InputStatusesClassesMap = {
	[key in InputStatusesEnum]: string
}

const commonClasses = 'p-3 border rounded text-grey disabled:border-grey disabled:bg-grey-light focus:outline-none'

export const InputStatusesClassesMap: InputStatusesClassesMap = {
	default: `${commonClasses} border-blue hover:border-blue-dark focus:ring-2 ring-blue`,
	error: `${commonClasses} border-red hover:border-red-dark focus:ring-2 ring-red`,
	success: `${commonClasses} border-green hover:border-green-dark focus:ring-2 ring-green`,
	warning: `${commonClasses} border-orange hover:border-orange-dark focus:ring-2 ring-orange`
}
