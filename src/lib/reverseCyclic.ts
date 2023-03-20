/**
 * Maps an index to a reverse cyclic pattern.
 * @param index The original index.
 * @param length The length of the sequence.
 * @returns The mapped index in the reverse cyclic pattern.
 */
export const reverseCyclic = (index: number, length: number): number => {
  // Calculate the mapped index based on the reverse cyclic pattern
  return (length - (index % length) - 1 + length) % length
}
