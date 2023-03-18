import { getItemCyclic } from './getItemCyclic'

describe('getItemCyclic', () => {
    it('returns the first element when index is 0', () => {
      const myArray = [1, 2, 3]
      expect(getItemCyclic(0, myArray)).toEqual(1)
    })
  
    it('returns the first element when index is equal to array length', () => {
      const myArray = [1, 2, 3]
      expect(getItemCyclic(3, myArray)).toEqual(1)
    })
  
    it('returns the second element when index is equal to 1', () => {
      const myArray = [1, 2, 3]
      expect(getItemCyclic(1, myArray)).toEqual(2)
    })
  
    it('returns the second element when index is greater than array length', () => {
      const myArray = [1, 2, 3]
      expect(getItemCyclic(4, myArray)).toEqual(2)
    })
  
    it('returns the first element when index is a multiple of array length', () => {
      const myArray = [1, 2, 3]
      expect(getItemCyclic(6, myArray)).toEqual(1)
    })
  
    it('returns the correct element when array has only one element', () => {
      const myArray = [1]
      expect(getItemCyclic(0, myArray)).toEqual(1)
      expect(getItemCyclic(1, myArray)).toEqual(1)
    })
  
    it('returns the correct element when array is empty', () => {
      const myArray: number[] = []
      expect(getItemCyclic(0, myArray)).toBeUndefined()
    })
  })