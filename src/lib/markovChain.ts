export type TransitionMatrix = Array<number>[]

/**
 * Creates a transition matrix from an array of numbers.
 * @param {Array<number>} data - The array of numbers to create the transition matrix from.
 * @returns {TransitionMatrix} The transition matrix created from the input array.
 */
export const createTransitionMatrix = (data: Array<number>): TransitionMatrix => {
  const matrix: TransitionMatrix = []
  const states = Array.from(new Set(data))

  for (const state of states) {
    const row = new Array(states.length).fill(0)
    const stateIndices = data.flatMap((value, index) => (value === state ? index : []))
    const nextStates = data.slice(1).filter((_, index) => stateIndices.includes(index))

    for (const nextState of nextStates) {
      row[nextState] += 1
    }

    const total = row.reduce((sum, value) => sum + value, 0)

    if (total > 0) {
      matrix.push(row.map((count) => count / total))
    } else {
      matrix.push(row)
    }
  }

  return matrix
}

/**
 * Gets the next state based on the current state and the transition matrix.
 * @param {number} currentState - The current state.
 * @param {TransitionMatrix} transitionMatrix - The transition matrix.
 * @returns {number} The next state.
 */
export const getNextState = (
  currentState: number,
  transitionMatrix: TransitionMatrix,
  random = Math.random
): number => {
  const row = transitionMatrix[currentState]
  const r = random()
  let sum = 0

  for (let i = 0; i < row.length; i++) {
    sum += row[i]

    if (r <= sum) {
      return i
    }
  }

  return currentState
}

/**
 * Generates a sequence of numbers based on the input data and length.
 * @param {Array<number>} data - The input data to generate the sequence from.
 * @param {number} length - The length of the sequence to generate.
 * @returns {Array<number>} The generated sequence of numbers.
 */
export const markovSequence = (
  data: Array<number>,
  length: number,
  random = Math.random
): Array<number> => {
  const transitionMatrix = createTransitionMatrix(data)
  let currentState = data[0]
  const sequence = [currentState]

  for (let i = 1; i < length; i++) {
    currentState = getNextState(currentState, transitionMatrix, random)
    sequence.push(currentState)
  }

  return sequence
}
