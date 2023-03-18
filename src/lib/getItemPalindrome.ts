export const getItemPalindrome = <T>(index: number, array: Array<T>): T => {
  const arraySize = array.length
  
  if (arraySize === 1) {
    return array[0]
  }

  const id = index % (2 * arraySize - 2)

  if (id < arraySize) {
    return array[id]
  } else {
    return array[2 * arraySize - id - 2]
  }
}
