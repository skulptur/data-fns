import { euclideanSequencer } from './euclideanSequencer'

export const euclideanSilences = (steps: number, notes: number, rotation = 0): number[] => {
  const noteSequence = euclideanSequencer(steps, notes, rotation)
  const silenceSequence: number[] = []

  for (let i = 0; i < steps; i++) {
    if (!noteSequence.includes(i)) {
      silenceSequence.push(i)
    }
  }

  return silenceSequence
}
