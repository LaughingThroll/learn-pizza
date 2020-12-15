import { createEvent, combine } from 'effector'

import { $pizzas, $pizzasLength, $isLoadedPizzas, $category, $sortBy } from '../states'
import { preFetchPizzasFx, fetchPizzasFx, TFecthPizzaParams } from '../effects'
import { IPizzaTypes } from '../../types'
import { URL_PIZZAS, URL_LENGTH } from '../../const'
import { makeRequest } from '../../utils'

const setLoadedPizzas = createEvent<boolean>()

const $combineCategoryAndSort = combine($category, $sortBy)

$isLoadedPizzas
	.on(setLoadedPizzas, (state, payload) => payload)

preFetchPizzasFx.use(async () => {
	const data = await makeRequest(URL_LENGTH)
	return data.length
})

$pizzasLength  
	.on(preFetchPizzasFx.doneData, (state, payload) => payload) 

preFetchPizzasFx.doneData.watch(payload => {setLoadedPizzas(false)})

preFetchPizzasFx()

fetchPizzasFx.use(async ({activeCategory, activeSort}: TFecthPizzaParams): Promise<IPizzaTypes[]>  => {
	return await makeRequest(`${URL_PIZZAS}?${activeCategory === null ? '' : `category=${activeCategory}`}&_sort=${activeSort}&_order=asc`)	 
})

$pizzas	
	.on(fetchPizzasFx.doneData, (state, payload) => payload)

fetchPizzasFx.doneData.watch(payload => {setLoadedPizzas(true)})

fetchPizzasFx({activeCategory: $category.getState(), activeSort: $sortBy.getState()})

$combineCategoryAndSort.watch(({ 0: activeCategory, 1: activeSort }) => {
	fetchPizzasFx({activeCategory, activeSort})
})






