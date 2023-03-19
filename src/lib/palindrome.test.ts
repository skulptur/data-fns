import { palindrome } from './palindrome'
import { getItem } from './getItem'
import { times } from './times'

describe('getItem', () => {
  describe('when array is empty', () => {
    it('returns undefined', () => {
      const myArray: number[] = []
      expect(getItem(0, myArray, palindrome)).toBeUndefined()
    })
  })

  describe('when array has 1 element', () => {
    it('returns the only element for any index', () => {
      const myArray = [1]
      expect(getItem(0, myArray, palindrome)).toEqual(1)
      expect(getItem(1, myArray, palindrome)).toEqual(1)
      expect(getItem(100, myArray, palindrome)).toEqual(1)
    })
  })

  describe('when array has 2 elements', () => {
    it('returns the elements in alternating order', () => {
      const myArray = [1, 2]
      expect(getItem(0, myArray, palindrome)).toEqual(1)
      expect(getItem(1, myArray, palindrome)).toEqual(2)
      expect(getItem(2, myArray, palindrome)).toEqual(1)
      expect(getItem(3, myArray, palindrome)).toEqual(2)
      expect(getItem(4, myArray, palindrome)).toEqual(1)
      expect(getItem(100, myArray, palindrome)).toEqual(1)
    })
  })

  describe('when array has 3 or more elements', () => {
    it('returns the elements in a getItem order', () => {
        const myArray = [1, 2, 3]
        
        expect(times(16, (index) => getItem(index, myArray, palindrome))).toEqual([ 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, ])
      
    })

    it('handles large indices correctly', () => {
      const myArray = [1, 2, 3]
      expect(getItem(1000, myArray, palindrome)).toEqual(1)
    })
  })
})