export const mapAt = <T>(
  array: Array<T>,
  index: number,
  mapFn: (item: T) => T
): Array<T> => {
  const item = array[index]

  return array
    .slice(0, index)
    .concat([mapFn(item)])
    .concat(array.slice(index + 1))
}
