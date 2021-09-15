export const FIELD_STATUS_INJECTION_KEY = 'fieldStatus'

export enum FieldStatusesEnum {
	WARNING = 'warning',
	ERROR = 'error',
	SUCCESS = 'success',
	DEFAULT = 'default'
}

export type FieldStatusesTypes = `${FieldStatusesEnum}`

export const FieldStatusesArray = Object.values(FieldStatusesEnum).map(status => status)

export type FieldStatusesClassesMap = {
	[key in FieldStatusesEnum]: string
}

const commonClasses = 'mt-1'

const commonLabelClasses = 'block mb-2 text-lg font-bold'

export const FieldMessageStatusesClassesMap: FieldStatusesClassesMap = {
	default: `${commonClasses} text-turquoise`,
	error: `${commonClasses} text-red`,
	success: `${commonClasses} text-green`,
	warning: `${commonClasses} text-orange`
}

export const LabelStatusClassesMap: FieldStatusesClassesMap = {
	default: `${commonLabelClasses} text-turquoise`,
	error: `${commonLabelClasses} text-red`,
	success: `${commonLabelClasses} text-green`,
	warning: `${commonLabelClasses} text-orange`
}
