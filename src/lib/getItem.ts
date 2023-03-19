export const getItem = <T>(index: number, array: Array<T>, indexMapFn: (index: number, length: number) => number): T => {
    return array[indexMapFn(index, array.length)]
}
