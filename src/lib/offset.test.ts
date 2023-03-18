import { offset } from './offset'

describe('offset', () => {
  it('should return the same array if the offset amount is zero', () => {
    const input = [1, 2, 3, 4, 5]
    const output = offset(input, 0)
    expect(output).toEqual(input)
  })

  it('should return a new array with elements offset by the given amount', () => {
    const input = [1, 2, 3, 4, 5]
    const offsetAmount = 2
    const output = offset(input, offsetAmount)
    expect(output).toEqual([3, 4, 5, 1, 2])
  })

  it('should handle negative offset amounts correctly', () => {
    const input = [1, 2, 3, 4, 5]
    const offsetAmount = -2
    const output = offset(input, offsetAmount)
    expect(output).toEqual([4, 5, 1, 2, 3])
  })

  it('should not modify the original array', () => {
    const input = [1, 2, 3, 4, 5]
    const offsetAmount = 2
    offset(input, offsetAmount)
    expect(input).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle negative offset amounts that wrap around the array correctly', () => {
    const input = [1, 2, 3, 4, 5]
    const offsetAmount = -1
    const output = offset(input, offsetAmount)
    expect(output).toEqual([5, 1, 2, 3, 4])
  })
})