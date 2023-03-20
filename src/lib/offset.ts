/**
 * Offsets the items in an array by a specified amount.
 * @param list The array to offset.
 * @param amount The amount to offset the items by.
 * @returns A new array with the items offset by the specified amount.
 */
export const offset = <T extends Array<any>>(list: T, amount: number): T => {
  // Use the spread operator to create a new array with the items offset by the specified amount
  return [...list.slice(amount), ...list.slice(0, amount)] as T
}
