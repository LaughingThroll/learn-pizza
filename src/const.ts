export interface SortingObjectType {
  name: string,
  type: string
}


export const URL_PIZZAS: string = 'http://localhost:3004/pizza'
export const URL_LENGTH: string = 'http://localhost:3004/length'
export const CATEGORIES_ARR: string[] = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
export const SORTING_ARR: SortingObjectType[] = [
  {
    name: 'популярности',
    type: 'rating'
  },
  {
    name: 'цене',
    type: 'price'
  },
  {
    name: 'алфавиту',
    type: 'title'
  }
]