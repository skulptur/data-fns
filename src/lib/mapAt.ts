export const mapAt = <T>(
  array: Array<T>,
  index: number,
  mapFn: (item: T) => T
): Array<T> => {
  if (index > array.length || index < 0) {
    throw new Error('Index out of range')
  }

  const item = array[index]
  const newItem = mapFn(item)

  // don't map if item is same
  if (newItem === item) {
    return array
  }

  const newArray = array.slice()
  newArray[index] = mapFn(array[index])

  return newArray
}
