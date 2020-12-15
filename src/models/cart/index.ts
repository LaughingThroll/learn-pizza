import { createEvent, sample } from 'effector'

import { $cart, $totalPrice, $totalCount } from '../states'
import { ICartPizza, IThisPizzasTypes, CartPizzasTypes } from '../../types'
import { flatObject } from '../../utils'

const getTotalPrice = <T>(arr: T[]): number => arr.reduce((acc: number, pizza: any): number => acc += pizza.price, 0)

export const addToCart = createEvent<ICartPizza>()
export const removeGroupFromCart = createEvent<string>()
export const plusPizza = createEvent<string>()
export const minusPizza = createEvent<string>()
export const clearCart = createEvent()

// TODO: rebuild and optimzation code 
$cart
  .on(addToCart, (state, payload) => {

    const { id, type, size } = payload

    if (!state[id]) state[id] = {}
    if (!state[id][type]) state[id][type] = {}
    if (!state[id][type][size]) state[id][type][size] = { thisPizzas: [], thisAllPrice: 0, thisAllCount: 0 }

    const arrPizzas = state[id][type][size].thisPizzas
    const thisPizzas = [...arrPizzas, payload]

    return {
      ...state,
      [id]: {
        ...state[id],
        [type]: {
          ...state[id][type],
          [size]: {
            thisPizzas,
            thisAllPrice: getTotalPrice(thisPizzas),
            thisAllCount: thisPizzas.length
          }
        }
      }
    }
  })
  .on(removeGroupFromCart, (state, payload) => {

    const [id, type, size] = payload.split('-')

    delete state[id][type][size]

    if (!Object.values(state[id][type]).length) delete state[id][type]
    if (!Object.values(state[id]).length) delete state[id]

    return { ...state }
  })
  .on(plusPizza, (state, payload) => {
    const [id, type, size] = payload.split('-')

    const newPlusPizzas: IThisPizzasTypes = state[id][type][size]
    ++newPlusPizzas.thisAllCount
    newPlusPizzas.thisPizzas = [...newPlusPizzas.thisPizzas, newPlusPizzas.thisPizzas[0]]

    return { ...state }

  })
  .on(minusPizza, (state, payload) => {
  
    const [id, type, size] = payload.split('-')

    const newMinusPizzas: IThisPizzasTypes = state[id][type][size]

    --newMinusPizzas.thisAllCount
    newMinusPizzas.thisPizzas.pop()

    if (!newMinusPizzas.thisPizzas.length) delete state[id][type][size]
    if (!Object.values(state[id][type]).length) delete state[id][type]
    if (!Object.values(state[id]).length) delete state[id]

    return {...state}


  })


  .reset(clearCart)





sample({
  source: $totalPrice,
  clock: $cart,
  fn: (total, state) => {
    const allPizzas: ICartPizza[] = flatObject<IThisPizzasTypes, CartPizzasTypes>(state, 2).flatMap(({ thisPizzas }) => thisPizzas)
    return getTotalPrice(allPizzas)
  },
  target: $totalPrice
})

sample({
  source: $totalCount,
  clock: $cart,
  fn: (count, state) => {
    return flatObject<IThisPizzasTypes, CartPizzasTypes>(state, 2).flatMap(({ thisPizzas }) => thisPizzas).length
  },
  target: $totalCount
})

