/**
 * Maps an index to a cyclic pattern.
 * @param index The original index.
 * @param length The length of the sequence.
 * @returns The mapped index in the cyclic pattern.
 * @example
 * cyclic(6, 5) // Returns 1
 *
 * @remarks
 * The returned index is always a positive integer.
 *
 * @complexity This function has a time complexity of O(1) and a space complexity of O(1), since it performs a
 * simple calculation that does not depend on the input size.
 */
export const cyclic = (index: number, length: number): number => {
  // Calculate the mapped index based on the cyclic pattern
  const normalizedIndex = index % length
  return Math.abs(normalizedIndex >= 0 ? normalizedIndex : length + normalizedIndex)
}
