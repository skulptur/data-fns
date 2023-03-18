## `data-fns`

This library provides utility functions for working with array data that are useful in many contexts, including creative coding. It offers generic functions that perform common operations such as offsetting an array, generating an array based on a callback function, and chunking an array according to a pattern.

## Get started

Install

```bash
yarn add data-fns
# or
npm install --save data-fns
```

Use

```typescript
import { getItemCyclic } from 'data-fns'

console.log(getItemCyclic(array, index))
```

## Documentation

### `times`

The times function allows you to call a given callback function a specified number of times and collects the results of each function call in an array. This can be useful in scenarios where you need to generate an array of data calculated by the index.

```typescript
const times = <T>(iterations: number, callback: (index: number) => T): Array<T> => {...}
```

Example:

```typescript
const items = times(5, (index) => index * 2)
// items = [0, 2, 4, 6, 8]
```

---

### `offset`

The `offset` function takes an array and an amount and returns a new array with the elements offset by the given amount. The function is generic and can work with any type of array.

```typescript
const offset = <T extends Array<any>>(list: T, amount: number): T => {...}
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const offsetAmount = 2
const items = offset(array, offsetAmount)
// items = [3, 4, 5, 1, 2]
```

---

### `patternChunks`

The patternChunks function takes in an array of elements and a pattern array of numbers, and returns a new array consisting of sub-arrays created by chunking the original array according to the pattern. The pattern array specifies the size of each chunk. If the pattern array is shorter than the original array, the pattern is cycled repeatedly.

```typescript
const patternChunks = <T>(array: Array<T>, pattern: Array<number>): Array<Array<T>> => {...}
```

Example:

```typescript
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const myPattern = [2, 3]
const result = patternChunks(myArray, myPattern)
// result = [ ['a', 'b'], ['c', 'd', 'e'], ['f', 'g'], ['h', 'i', 'j'] ]
```

---

### `mapAt`

`mapAt` is a function that modifies the item located at the specified index of the array using the given function and returns a new array with the modified item.

```typescript
const mapAt = <T>( array: Array<T>, index: number, mapFn: (item: T) => T ): Array<T> => {...}
```

```typescript
const myArray = [1, 2, 3, 4, 5]
const index = 2
const items = mapAt(myArray, index, (item) => item * 2)
// items = [1, 2, 6, 4, 5]
```

---

### `getItemCyclic`

The `getItemCyclic` function retrieves an element from an array based on the given `index` value. If the `index` value exceeds the length of the array, the function will retrieve the element from the beginning of the array again and so on.

```typescript
const getItemCyclic = <T>(index: number, array: Array<T>): T => {...}
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const items = times(7, (index) => getItemCyclic(index, myArray))
// items = [1, 2, 3, 4, 5, 1, 2]
```

---

### `getItemReverseCyclic`

Similar behaviour to `getItemCyclic` but reversed, starting from the last element and cycling back to the last element.

```typescript
const getItemReverseCyclic = <T>(index: number, array: Array<T>): T => {...}
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const items = times(7, (index) => getItemReverseCyclic(index, myArray))
// items = [5, 4, 3, 2, 1, 5, 4]
```

---

### `getItemPalindrome`

This function is used to retrieve an element from an array based on its index, but with a special behavior that alternates the direction of indexing when the end of the array is reached, forming a palindrome.

```typescript
const getItemPalindrome = <T>(index: number, array: Array<T>): T => {...}
```

Example:

```typescript
const myArray = [1, 2, 3]
const items = times(7, (index) => getItemPalindrome(index, myArray))
// items = [1, 2, 3, 2, 1, 2, 3]
```
