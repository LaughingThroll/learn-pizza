export type ID = number | string

export interface IPizzaTypes {
  id: ID,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}