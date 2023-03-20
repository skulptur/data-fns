/**
 * Maps an index to a cyclic pattern.
 * @param index The original index.
 * @param length The length of the sequence.
 * @returns The mapped index in the cyclic pattern.
 */
export const cyclic = (index: number, length: number): number => {
  // Calculate the mapped index based on the cyclic pattern
  const normalizedIndex = index % length
  return Math.abs(normalizedIndex >= 0 ? normalizedIndex : length + normalizedIndex)
}
