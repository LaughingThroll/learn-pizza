import { createEffect } from 'effector'
import { filterPayload, IPizzaTypes } from '../types'

export type TFecthPizzaParams = {
	activeCategory: filterPayload,
	activeSort: string
}

export const preFetchPizzasFx = createEffect<void, number, Error>()
export const fetchPizzasFx = createEffect<TFecthPizzaParams, IPizzaTypes[], Error>()