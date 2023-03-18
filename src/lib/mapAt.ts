export const mapAt = <T>(
  array: Array<T>,
  index: number,
  mapFn: (item: T) => T
): Array<T> => {
  if (index > array.length || index < 0) {
    throw new Error('Index out of range')
  }

  const item = array[index]

  return array
    .slice(0, index)
    .concat([mapFn(item)])
    .concat(array.slice(index + 1))
}
