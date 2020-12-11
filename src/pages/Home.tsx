import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock, PizzaLoading } from '../components'
import { CATEGORIES_ARR, SORTING_ARR } from '../const'
import { flatObject } from '../utils'
import { IPizzaTypes, CartPizzasTypes, ICartPizza } from '../types'

import { setFilter, setPizzasLoaded, setSortBy, addToCart } from '../store/actions'
import { preFetchPizzas, fetchPizzas } from '../store/thunks/fetchPizzas'


function Home() {
  const dispatch = useDispatch()

  const pizzas = useSelector(({ pizzasReducer: { pizzas } }: any): IPizzaTypes[] => pizzas)
  const pizzaCount = useSelector(({ cart: { cartPizzas } }: any): any => cartPizzas)
  const lengthPizzas = useSelector(({ pizzasReducer: { length } }: any): number => length.length)
  const isLoaded = useSelector(({ pizzasReducer: { isLoaded } }: any): boolean => isLoaded)
  const activeFilter = useSelector(({ filters: { filter } }: any): null | number  => filter)
  const activeSortBy = useSelector(({ sorting: { sortBy } }: any): string  => sortBy)

  const onFilter = useCallback((index: number | null) => dispatch(setFilter(index)), [dispatch])
  const onSortBy = useCallback((sort: string) => dispatch(setSortBy(sort)), [dispatch])  


  useEffect(() => {
    dispatch(setPizzasLoaded(false))
  }, [dispatch, activeFilter, activeSortBy])

  useEffect(() => {
    const preFetch = new Promise((resolve, reject) => {
      if (!isLoaded) dispatch(preFetchPizzas())
      return resolve(true)
    })

    preFetch.then((res) => {
      if (res) {
        dispatch(fetchPizzas(activeFilter, activeSortBy))
      }
    })
  }, [dispatch, pizzas.length, isLoaded, activeFilter, activeSortBy])

 
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeFilter} categories={CATEGORIES_ARR} onFilter={onFilter} />
        <Sort activeSortBy={activeSortBy} onSortBy={onSortBy} sorters={SORTING_ARR} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ? pizzas.map(pizza => <PizzaBlock key={`${pizza.id}_${pizza.name}`} count={pizzaCount[pizza.id] && flatObject<CartPizzasTypes, ICartPizza>(pizzaCount[pizza.id], 3).length} onClickAddToCart={(pizza) => dispatch(addToCart(pizza))} {...pizza} />)
          : Array(lengthPizzas).fill(0).map((i, index) => <PizzaLoading key={index} />) }
      </div>
    </div>
  )
}

export default Home
