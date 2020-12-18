

export const flatObject = <T, U>(obj: U, depth: number): T[] => {
  let temp = Object.values(obj)
    for (let i = depth; i > 0; i--) {
      temp = temp.flatMap(Object.values)
    }
  return temp
}


export const makeRequest = async (URL: string, options?: ResponseInit): Promise<any> => {
  const res = await fetch(URL, options)
  return await res.json()
}