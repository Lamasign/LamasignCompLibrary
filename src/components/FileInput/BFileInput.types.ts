export enum InputFileStatusesEnum {
	WARNING = 'warning',
	ERROR = 'error',
	SUCCESS = 'success',
	DEFAULT = 'default'
}
export const InputFileStatusesArray = Object.values(InputFileStatusesEnum).map(status => status)

export type InputFileStatusesClassesMap = {
	[key in InputFileStatusesEnum]: string
}

const commonClasses = 'w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border cursor-pointer hover:text-white ease-linear transition-all duration-150'

export const InputFileStatusesClassesMap: InputFileStatusesClassesMap = {
	default: `${commonClasses} border-blue text-blue hover:border-blue-dark focus:ring-2 ring-blue`,
	error: `${commonClasses} border-red text-red hover:border-red-dark focus:ring-2 ring-red`,
	success: `${commonClasses} border-green text-green hover:border-green-dark focus:ring-2 ring-green`,
	warning: `${commonClasses} border-orange text-orange hover:border-orange-dark focus:ring-2 ring-orange`
}
