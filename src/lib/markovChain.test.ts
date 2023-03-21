// import { createTransitionMatrix, markovSequence } from './markovChain'
// import { xoshiro128 } from 'random-fns'

describe('Markov Chain Implementation', () => {
  // describe('createTransitionMatrix', () => {
  //   it('should create correct transition matrix for simple input', () => {
  //     const data = [0, 1, 0]
  //     expect(createTransitionMatrix(data)).toEqual([
  //       [0, 1],
  //       [1, 0],
  //     ])
  //   })
  //   it('should create correct transition matrix for more complex input', () => {
  //     const data = [0, 1, 2, 1, 0, 1, 2, 1, 0, 1]
  //     expect(createTransitionMatrix(data)).toEqual([
  //       [0, 1, 0],
  //       [0.5, 0, 0.5],
  //       [0, 1, 0],
  //     ])
  //   })
  //   it('should create correct transition matrix for input with only one state', () => {
  //     const data = [0, 0, 0, 0]
  //     expect(createTransitionMatrix(data)).toEqual([[1]])
  //   })
  //   it('should create correct transition matrix for input with no transitions', () => {
  //     const data = [0, 0, 0, 0, 0]
  //     expect(createTransitionMatrix(data)).toEqual([[1]])
  //   })
  // })
  // describe('markovSequence', () => {
  //   it('should generate correct sequence for simple input', () => {
  //     const data = [0, 1, 0]
  //     const length = 5
  //     const random = xoshiro128('hello')
  //     const sequence = markovSequence(data, length, random)
  //     expect(sequence).toEqual([0, 1, 0, 1, 0])
  //   })
  //   it('should generate correct sequence for more complex input', () => {
  //     const data = [0, 1, 2, 1, 0, 1, 2, 1, 0, 1]
  //     const length = 10
  //     const random = xoshiro128('hello')
  //     const sequence = markovSequence(data, length, random)
  //     expect(sequence).toEqual([0, 1, 2, 1, 2, 1, 2, 1, 2, 1])
  //   })
  //   it('should generate correct sequence for input with only one state', () => {
  //     const data = [0, 0, 0, 0]
  //     const length = 5
  //     const sequence = markovSequence(data, length)
  //     expect(sequence.length).toBe(length)
  //     expect(sequence).toEqual([0, 0, 0, 0, 0])
  //   })
  //   it('should generate correct sequence for input with no transitions', () => {
  //     const data = [0, 0, 0, 0, 0]
  //     const length = 5
  //     const sequence = markovSequence(data, length)
  //     expect(sequence.length).toBe(length)
  //     expect(sequence).toEqual([0, 0, 0, 0, 0])
  //   })
  // })
})
