// a common rule that generates an interesting balance between chaos and order
const ruleset110: number[] = [0, 1, 1, 1, 1, 0, 0, 0]

function cellularAutomataSequencer(
  numSteps: number,
  onSteps: number[],
  ruleset = ruleset110
): number[] {
  // Initialize the sequence as all 0's
  let sequence: number[] = new Array(numSteps).fill(0)

  // Set the "on" steps to 1
  onSteps.forEach((stepIndex) => {
    sequence[stepIndex] = 1
  })

  // Define the rules for the cellular automata

  // Iterate through each step of the sequence
  for (let i = 1; i < numSteps; i++) {
    // Get the left, center, and right cells
    let left = sequence[i - 1] || 0
    let center = sequence[i]
    let right = sequence[i + 1] || 0

    // Use the ruleset to determine the new state of the center cell
    let newCenter = ruleset[left * 4 + center * 2 + right]

    // Update the center cell in the sequence
    sequence[i] = newCenter
  }

  return sequence
}
