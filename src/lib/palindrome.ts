/**
 * Maps an index to a palindrome pattern.
 * @param index The original index.
 * @param length The length of the sequence.
 * @returns The mapped index in the palindrome pattern.
 */
export const palindrome = (index: number, length: number): number => {
  // Save the length of the sequence in a variable
  const arraySize = length

  // If the sequence has only one element, return 0
  if (arraySize === 1) {
    return 0
  }

  // Calculate the mapped index based on the palindrome pattern
  const id = index % (2 * arraySize - 2)

  if (id < arraySize) {
    return id
  } else {
    return 2 * arraySize - id - 2
  }
}
