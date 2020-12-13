import { flatObject } from '../../utils'

import { ICartStateTypes, ICartPizza, CartPizzasTypes, IThisPizzasTypes } from '../../types'
import { CartActions } from '../types'
import { CartEnum } from '../enums'



const initialState: ICartStateTypes = {
  cartPizzas: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = <T>(arr: T[]): number => arr.reduce((acc: number, pizza: any): number => acc += pizza.price, 0)

const cart = (state = initialState, action: CartActions): ICartStateTypes => {

  switch (action.type) {
    case CartEnum.ADD:
      const { id, type, size } = action.payload

      if (!state.cartPizzas[id]) state.cartPizzas[id] = {}
      if (!state.cartPizzas[id][type]) state.cartPizzas[id][type] = {}
      if (!state.cartPizzas[id][type][size]) state.cartPizzas[id][type][size] = { thisPizzas: [], thisAllPrice: 0, thisAllCount: 0 }

      const thisPizzas = [...state.cartPizzas[id][type][size].thisPizzas, action.payload]

      const cartPizzas: CartPizzasTypes = {
        ...state.cartPizzas,
        [id]: {
          ...state.cartPizzas[id],
          [type]: {
            ...state.cartPizzas[id][type],
            [size]: {
              thisPizzas,
              thisAllPrice: getTotalPrice(thisPizzas),
              thisAllCount: thisPizzas.length,
            }
          }
        }
      }

      const allPizzas: ICartPizza[] = flatObject<IThisPizzasTypes, CartPizzasTypes>(cartPizzas, 2).flatMap(({ thisPizzas }) => thisPizzas)
      return {
        ...state,
        cartPizzas,
        totalPrice: getTotalPrice(allPizzas),
        totalCount: allPizzas.length
      }
    case CartEnum.CLEAR:
      return {
        ...state,
        cartPizzas: {},
        totalPrice: 0,
        totalCount: 0
      }
    case CartEnum.REMOVE_GROUP:
      const [removeId, removeType, removeSize] = action.payload.split('-')
      const newState: CartPizzasTypes = JSON.parse(JSON.stringify(state.cartPizzas))

      const currentRemovePrice = newState[removeId][removeType][removeSize].thisAllPrice
      const currentRemoveCount = newState[removeId][removeType][removeSize].thisAllCount

      delete newState[removeId][removeType][removeSize]

      if (!Object.values(newState[removeId][removeType]).length) delete newState[removeId][removeType]
      if (!Object.values(newState[removeId]).length) delete newState[removeId]

      return {
        ...state,
        cartPizzas: newState,
        totalPrice: state.totalPrice - currentRemovePrice,
        totalCount: state.totalCount - currentRemoveCount
      }
    case CartEnum.PLUS:
      const [plusId, plusType, plusSize] = action.payload.split('-')

      const newPlusState: CartPizzasTypes = JSON.parse(JSON.stringify(state.cartPizzas))
      const newPlusPizzas: IThisPizzasTypes = newPlusState[plusId][plusType][plusSize]
      const newPlusPizza: ICartPizza = newPlusPizzas.thisPizzas[0]
      ++newPlusPizzas.thisAllCount
      newPlusPizzas.thisPizzas = [...newPlusPizzas.thisPizzas, newPlusPizza]

      return {
        ...state,
        cartPizzas: newPlusState,
        totalPrice: state.totalPrice + newPlusPizza.price,
        totalCount: ++state.totalCount
      }
    case CartEnum.MINUS:
      const [minusId, minusType, minusSize] = action.payload.split('-')

      const newMinusState: CartPizzasTypes = JSON.parse(JSON.stringify(state.cartPizzas))
      const newMinusPizzas: IThisPizzasTypes = newMinusState[minusId][minusType][minusSize]
      const newMinusPizza: ICartPizza = newMinusPizzas.thisPizzas && newMinusPizzas.thisPizzas[0]
      
      --newMinusPizzas.thisAllCount
      newMinusPizzas.thisPizzas.pop()

      if (!newMinusPizzas.thisPizzas.length) delete newMinusState[minusId][minusType][minusSize]
      if (!Object.values(newMinusState[minusId][minusType]).length) delete newMinusState[minusId][minusType]
      if (!Object.values(newMinusState[minusId]).length) delete newMinusState[minusId]

      return {
        ...state,
        cartPizzas: newMinusState,
        totalPrice: state.totalPrice - newMinusPizza.price,
        totalCount: --state.totalCount
      }

    default:
      return state
  }
}


export default cart

