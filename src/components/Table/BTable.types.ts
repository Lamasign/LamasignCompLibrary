export enum TableColumnVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const TableColumnVariantsArray = Object.values(TableColumnVariantsEnum).map(variant => variant)

export type TableColumnVariantsMap = {
	[key in TableColumnVariantsEnum]: string
}

const commonClasses = 'border text-center px-8 py-4'


export const TableColumnHeaderVariantsMap: TableColumnVariantsMap = {
	primary: `${commonClasses} bg-blue-light text-blue-dark font-normal hover:bg-blue-dark focus:ring-4 ring-blue`,
	warning: `${commonClasses} bg-orange-light text-blue-dark hover:bg-orange-dark focus:ring-4 ring-orange`,
	danger: `${commonClasses} bg-red-light text-blue-dark hover:bg-red-light focus:ring-4 ring-red`,
	success: `${commonClasses} bg-green-light text-blue-dark hover:bg-green-dark focus:ring-4 ring-green`,
}
