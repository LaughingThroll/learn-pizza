import { CartEnum } from '../enums'
import { ICartPizza, CartActions } from '../types'

type CartPizzasTypes = {
  [id: number]: ICartPizza[]
}

interface ICartStateTypes {
  cartPizzas: CartPizzasTypes,
  totalPrice: number,
  totalCount: number
}

const initialState: ICartStateTypes = {
  cartPizzas: {},
  totalPrice: 0,
  totalCount: 0
}


const cart = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case CartEnum.ADD:
      return {
        ...state,
        [action.payload.id]: [
          ...state.cartPizzas[action.payload.id],
          action.payload
        ]
      }
    case CartEnum.TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload
      }
    case CartEnum.TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload
      }
    default:
      return state
  }
}


export default cart

