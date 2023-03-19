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
import { cyclic } from 'data-fns'

console.log(cyclic(array, index))
```

## Documentation

### `times`

The times function allows you to call a given callback function a specified number of times and collects the results of each function call in an array. This can be useful in scenarios where you need to generate an array of data calculated by the index.

```typescript
<T>(iterations: number, callback: (index: number) => T) => Array<T>
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
<T extends Array<any>>(list: T, amount: number) => T
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const offsetAmount = 2
const items = offset(array, offsetAmount)
// items = [3, 4, 5, 1, 2]
```

### `patternChunks`

The patternChunks function takes in an array of elements and a pattern array of numbers, and returns a new array consisting of sub-arrays created by chunking the original array according to the pattern. The pattern array specifies the size of each chunk. If the pattern array is shorter than the original array, the pattern is cycled repeatedly.

```typescript
<T>(array: Array<T>, pattern: Array<number>) => Array<Array<T>>
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
<T>( array: Array<T>, index: number, mapFn: (item: T) => T ) => Array<T>
```

```typescript
const myArray = [1, 2, 3, 4, 5]
const index = 2
const items = mapAt(myArray, index, (item) => item * 2)
// items = [1, 2, 6, 4, 5]
```

---

### `getItem`

The `getItem` utility function returns an item from an array based on a provided index and index mapping function. It is useful for cases where the desired behavior for selecting items from an array is not covered by the standard indexing operation. Use it in combination with for example `cyclic`.

```typescript
<T>(index: number, array: Array<T>, indexMapFn: (index: number, length: number) => number) => T
```

Example:

```typescript
const myArray = ['a', 'b', 'c', 'd']
const indexMapFn = (index, length) => (index + 1) % length
const item = getItem(3, myArray, indexMapFn)
// item = 'a'
```

---

### `cyclic`

The `cyclic` function is useful in combination with `getItem` to retrieve an element from an array based on the given `index` value. If the `index` value exceeds the length of the array, the function will retrieve the element from the beginning of the array again and so on.

```typescript
(index: number, length: number) => number
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const items = times(7, (index) => getItem(index, myArray, cyclic))
// items = [1, 2, 3, 4, 5, 1, 2]
```

---

### `reverseCyclic`

Similar behaviour to `cyclic` but reversed, starting from the last element and cycling back to the last element.

```typescript
(index: number, length: number) => number
```

Example:

```typescript
const myArray = [1, 2, 3, 4, 5]
const items = times(7, (index) => getItem(index, myArray, reverseCyclic))
// items = [5, 4, 3, 2, 1, 5, 4]
```

---

### `palindrome`

This function is useful in combination with `getItem` to retrieve an element from an array based on its index, but with a special behavior that alternates the direction of indexing when the end of the array is reached, forming a palindrome.

```typescript
(index: number, length: number) => number
```

Example:

```typescript
const myArray = [1, 2, 3]
const items = times(7, (index) => getItem(index, myArray, palindrome))
// items = [1, 2, 3, 2, 1, 2, 3]
```
