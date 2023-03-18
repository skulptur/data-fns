export const getItemReverseCyclic = <T>(index: number, array: Array<T>): T => {
    const id = (array.length - (index % array.length) - 1 + array.length) % array.length
    return array[id]
}
