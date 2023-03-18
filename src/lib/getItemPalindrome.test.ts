import { getItemPalindrome } from './getItemPalindrome'
import { times } from './times'

describe('getItemPalindrome', () => {
  describe('when array is empty', () => {
    it('returns undefined', () => {
      const myArray: number[] = []
      expect(getItemPalindrome(0, myArray)).toBeUndefined()
    })
  })

  describe('when array has 1 element', () => {
    it('returns the only element for any index', () => {
      const myArray = [1]
      expect(getItemPalindrome(0, myArray)).toEqual(1)
      expect(getItemPalindrome(1, myArray)).toEqual(1)
      expect(getItemPalindrome(100, myArray)).toEqual(1)
    })
  })

  describe('when array has 2 elements', () => {
    it('returns the elements in alternating order', () => {
      const myArray = [1, 2]
      expect(getItemPalindrome(0, myArray)).toEqual(1)
      expect(getItemPalindrome(1, myArray)).toEqual(2)
      expect(getItemPalindrome(2, myArray)).toEqual(1)
      expect(getItemPalindrome(3, myArray)).toEqual(2)
      expect(getItemPalindrome(4, myArray)).toEqual(1)
      expect(getItemPalindrome(100, myArray)).toEqual(1)
    })
  })

  describe('when array has 3 or more elements', () => {
    it('returns the elements in a palindrome order', () => {
        const myArray = [1, 2, 3]
        
        expect(times(16, (index) => getItemPalindrome(index, myArray))).toEqual([ 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, ])
      
    })

    it('handles large indices correctly', () => {
      const myArray = [1, 2, 3]
      expect(getItemPalindrome(1000, myArray)).toEqual(1)
    })
  })
})