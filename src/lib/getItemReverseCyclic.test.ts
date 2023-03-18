import { getItemReverseCyclic } from './getItemReverseCyclic'

describe('getItemReverseCyclic', () => {
  it('returns the last element for index 0', () => {
    const myArray = [1, 2, 3]
    expect(getItemReverseCyclic(0, myArray)).toEqual(3)
  })

  it('returns the correct elements for indices 1 to n', () => {
    const myArray = [1, 2, 3, 4, 5]
    const expectedArray = [5, 4, 3, 2, 1, 5, 4]
    const resultArray = expectedArray.map((_, i) => getItemReverseCyclic(i, myArray))
    expect(resultArray).toEqual(expectedArray)
  })

  it('handles large indices correctly', () => {
    const myArray = [1, 2, 3]
    expect(getItemReverseCyclic(1000, myArray)).toEqual(2)
  })

  it('returns the correct element when array is empty', () => {
    const myArray: number[] = []
    expect(getItemReverseCyclic(0, myArray)).toBeUndefined()
  })

  it('handles negative indices', () => {
    const myArray = [1, 2, 3]
    expect(getItemReverseCyclic(-1, myArray)).toEqual(1)
    expect(getItemReverseCyclic(-2, myArray)).toEqual(2)
    expect(getItemReverseCyclic(-3, myArray)).toEqual(3)
  })

  it('returns undefined for negative indices when array is empty', () => {
    const myArray: number[] = []
    expect(getItemReverseCyclic(-1, myArray)).toBeUndefined()
  })

  it('handles arrays with a single element correctly', () => {
    const myArray = [1]
    expect(getItemReverseCyclic(0, myArray)).toEqual(1)
    expect(getItemReverseCyclic(1, myArray)).toEqual(1)
    expect(getItemReverseCyclic(-1, myArray)).toEqual(1)
  })
})