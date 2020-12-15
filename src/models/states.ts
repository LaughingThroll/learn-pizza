import { createStore } from 'effector'

import { CartPizzasTypes, filterPayload, IPizzaTypes } from '../types'


export const $pizzas = createStore<IPizzaTypes[]>([])
export const $pizzasLength = createStore<number>(0)
export const $isLoadedPizzas = createStore<boolean>(false)

export const $cart = createStore<CartPizzasTypes>({})
export const $totalPrice = createStore<number>(0)
export const $totalCount = createStore<number>(0)

export const $category = createStore<filterPayload>(null)
export const $sortBy = createStore<string>('rating')

