export enum ToastVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const ToastVariantsArray = Object.values(ToastVariantsEnum).map(variant => variant)

export type ToastVariantsMap = {
	[key in ToastVariantsEnum]: string
}

export const ToastVariantsMap: ToastVariantsMap = {
	primary: 'bg-blue text-white font-normal hover:bg-blue-dark focus:ring-4 ring-blue',
	warning: 'bg-orange text-white hover:bg-orange-dark focus:ring-4 ring-orange',
	danger: 'bg-red text-black hover:text-white hover:bg-red-light focus:ring-4 ring-red',
	success: 'bg-green text-white hover:bg-green-dark focus:ring-4 ring-green',
}
