import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock, PizzaLoading } from '../components'
import { CATEGORIES_ARR, SORTING_ARR } from '../const'

import { setFilter, setPizzasLoaded, setSortBy } from '../store/actions'
import { PizzaType } from '../store/reducers/pizzas'
import { preFetchPizzas, fetchPizzas } from '../store/thunks/fetchPizzas'


function Home() {
  const dispatch = useDispatch()

  const pizzas = useSelector(({ pizzasReducer: { pizzas } }: any): PizzaType[] => pizzas)
  const lengthPizzas = useSelector(({ pizzasReducer: { length } }: any): any => length.length)
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
      
        { isLoaded ? pizzas.map(pizza => <PizzaBlock key={`${pizza.id.toString(2)}`} {...pizza} />)
          : Array(lengthPizzas).fill(0).map((i, index) => <PizzaLoading key={index} />) }


      </div>
    </div>
  )
}

export default Home
