import { cyclic } from './cyclic'
import { getItem } from './getItem'

/**
 * Splits an array into chunks based on a pattern.
 * @param array The array to split.
 * @param pattern The pattern to split the array with.
 * @returns An array of arrays representing the splits.
 */
export const patternChunks = <T>(array: Array<T>, pattern: Array<number>): Array<Array<T>> => {
  const result: Array<Array<T>> = []
  const _array = [...array]
  let i = 0

  while (_array.length > 0) {
    result.push(_array.splice(0, getItem(i, pattern, cyclic)))
    i++
  }

  return result
}
