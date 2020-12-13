export interface SortingObjectType {
  name: string,
  type: string
}


export const URL_PIZZAS: string = '/pizza'
export const URL_LENGTH: string = 'length'
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


export const TYPES_PIZZAS: string[] = ['тонкое', 'традиционное']
export const AVAILABLE_SIZES: number[] = [26, 30, 40]