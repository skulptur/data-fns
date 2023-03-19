export const palindrome = (index: number, length: number): number => {
  const arraySize = length
  
  if (arraySize === 1) {
    return 0
  }

  const id = index % (2 * arraySize - 2)

  if (id < arraySize) {
    return id
  } else {
    return 2 * arraySize - id - 2
  }
}
