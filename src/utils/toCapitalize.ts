export const toCapitalize = (value: string): string => {
  const first = value.substring(0, 1).toUpperCase()
  const rest = value.substring(1, value.length)

  return first + rest
}
