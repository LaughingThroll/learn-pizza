import { IPizzaTypes } from '../../types'
import { PizzasEnum } from '../enums'
import { PizzasActions } from '../types'

interface IPizzasStateTypes {
  pizzas: IPizzaTypes[],
  length: number,
  isLoaded: boolean
}


const initialState: IPizzasStateTypes = {
  pizzas: [],
  length: 0,
  isLoaded: false
}


const pizzasReducer = (state = initialState, action: PizzasActions) => {
  switch (action.type) {
    case PizzasEnum.SET:
      return {
        ...state,
        pizzas: action.payload,
        isLoaded: true
      }
    case PizzasEnum.LENGTH:
      return {
        ...state,
        length: action.payload,

      }
    case PizzasEnum.LOADED: 
      return {
        ...state,
        isLoaded: action.payload
      }    
    default:
      return state
  }

}



export default pizzasReducer