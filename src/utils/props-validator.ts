export function stringOrNullValidator (prop?: string | null): boolean {
  return typeof prop === 'string' || prop === null
}
