

export const flatObject = <T, U>(obj: U, depth: number): T[] => {
  let temp = Object.values(obj)
    for (let i = depth; i > 0; i--) {
      temp = temp.flatMap(Object.values)
    }
  return temp
}