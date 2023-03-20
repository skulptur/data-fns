const numSort = (a: number, b: number) => a - b

export const euclideanSequencer = (steps: number, notes: number, rotation = 0): number[] => {
  if (steps < 0 || notes < 0) {
    throw new Error('Inputs must be positive integers')
  }

  const sequence: number[] = []
  const maxNotes = notes > steps ? steps : notes

  for (let i = 0; i < maxNotes; i++) {
    const index = Math.floor((i * steps) / maxNotes)
    sequence.push((index + rotation) % steps)
  }

  return sequence.sort(numSort)
}
