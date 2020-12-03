import { ID } from '../../types'

export interface PizzaType {
  id: ID,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

interface PizzasActionType {
  type: string,
  payload: PizzaType[],
  length: number,
  isLoaded: boolean
}

const initialState = {
  pizzas: [],
  length: 0,
  isLoaded: false
}


const pizzasReducer = (state = initialState, action: PizzasActionType) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        pizzas: action.payload,
        isLoaded: true
      }
    case 'SET_PIZZAS_LENGTH':
      return {
        ...state,
        length: action.payload,

      }
    default:
      return state
  }

}



export default pizzasReducer