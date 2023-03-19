export const reverseCyclic = (index: number, length: number): number => {
    return (length - (index % length) - 1 + length) % length    
}
