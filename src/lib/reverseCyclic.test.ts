import { reverseCyclic } from './reverseCyclic' 
import { getItem } from './getItem' 

describe('reverseCyclic', () => {
  it('returns the last element for index 0', () => {
    const myArray = [1, 2, 3]
    expect(getItem(0, myArray, reverseCyclic)).toEqual(3)
  })

  it('returns the correct elements for indices 1 to n', () => {
    const myArray = [1, 2, 3, 4, 5]
    const expectedArray = [5, 4, 3, 2, 1, 5, 4]
    const resultArray = expectedArray.map((_, i) => getItem(i, myArray, reverseCyclic))
    expect(resultArray).toEqual(expectedArray)
  })

  it('handles large indices correctly', () => {
    const myArray = [1, 2, 3]
    expect(getItem(1000, myArray, reverseCyclic)).toEqual(2)
  })

  it('returns the correct element when array is empty', () => {
    const myArray: number[] = []
    expect(getItem(0, myArray, reverseCyclic)).toBeUndefined()
  })

  it('handles negative indices', () => {
    const myArray = [1, 2, 3]
    expect(getItem(-1, myArray, reverseCyclic)).toEqual(1)
    expect(getItem(-2, myArray, reverseCyclic)).toEqual(2)
    expect(getItem(-3, myArray, reverseCyclic)).toEqual(3)
  })

  it('returns undefined for negative indices when array is empty', () => {
    const myArray: number[] = []
    expect(getItem(-1, myArray, reverseCyclic)).toBeUndefined()
  })

  it('handles arrays with a single element correctly', () => {
    const myArray = [1]
    expect(getItem(0, myArray, reverseCyclic)).toEqual(1)
    expect(getItem(1, myArray, reverseCyclic)).toEqual(1)
    expect(getItem(-1, myArray, reverseCyclic)).toEqual(1)
  })
})