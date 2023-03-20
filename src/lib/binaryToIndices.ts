/**
 * Converts an array of binary digits to an array of indices where the digit is 1.
 * @param binary An array of binary digits (0 or 1).
 * @returns An array of indices where the digit is 1.
 */
export const binaryToIndices = (binary: Array<number>): Array<number> => {
  // Initialize an empty array to store the indices.
  const indices: Array<number> = []

  // Loop through the binary array.
  for (let i = 0; i < binary.length; i++) {
    // If the digit is 1, add the index to the indices array.
    if (binary[i] === 1) {
      indices.push(i)
    }
  }

  // Return the array of indices.
  return indices
}
