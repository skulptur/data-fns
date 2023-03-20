/**
 * Generates a sequence of values by applying a given function to an initial value for a specified number of iterations.
 * @param iterations The number of iterations to perform.
 * @param initialValue The initial value of the sequence.
 * @param iterateFn The function to apply to the initial value and each subsequent value.
 * @returns An array containing all the iterations.
 */
export const generateSequence = <T>(
  iterations: number,
  initialValue: T,
  iterateFn: (value: T) => T
): T[] => {
  if (iterations < 0) {
    throw new Error('Iterations must be a positive number')
  }

  if (iterations === 0) {
    return []
  }

  const sequence: T[] = [initialValue]
  let value = initialValue

  for (let i = 1; i < iterations; i++) {
    value = iterateFn(value)
    sequence.push(value)
  }

  return sequence
}
