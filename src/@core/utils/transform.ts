// export const convertArrayToObject = (data: Array<T>, key: string) => {
//   if (!key || !data[0][key]) return {}
//   return data.reduce((result, item) => ({ ...result, [item[key]]: { ...item } }), {})
// }

export function transformArrayToObject<T>(data: Array<T>, key: string): Record<string, T> {
  if (!key || !data[0][key]) return {}

  return data.reduce((result, item) => ({ ...result, [item[key]]: { ...item } }), {})
}
