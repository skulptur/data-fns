export const getRandomItem = <T>(items: Array<T>): T => {
  return items[Math.floor(Math.random() * items.length)]
}
