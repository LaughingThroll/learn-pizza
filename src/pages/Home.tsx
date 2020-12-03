import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock, PizzaLoading } from '../components'
import { CATEGORIES_ARR, SORTING_ARR } from '../const'

import { setFilter } from '../store/actions'
import { PizzaType } from '../store/reducers/pizzas'
import { preFetchPizzas, fetchPizzas } from '../store/thunks/fetchPizzas'


function Home() {
  const dispatch = useDispatch()
  const pizzas = useSelector(({ pizzasReducer: { pizzas } }: any): PizzaType[] => pizzas)
  const lengthPizzas = useSelector(({ pizzasReducer: { length } }: any): any => length.length)
  const isLoaded = useSelector(({ pizzasReducer: { isLoaded } }: any): boolean => isLoaded)

  const onFilter = useCallback((index: number | null) => dispatch(setFilter(index)), [dispatch])


  useEffect(() => {
    const preFetch = new Promise((resolve, reject) => {
      if (!isLoaded) dispatch(preFetchPizzas())
      return resolve(true)
    })

    preFetch.then((res) => {
      if (res && !pizzas.length) {
        dispatch(fetchPizzas())
      }
    })





  }, [dispatch, pizzas.length, isLoaded])


  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={CATEGORIES_ARR} onFilter={onFilter} />
        <Sort sorters={SORTING_ARR} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ? pizzas.map(pizza => <PizzaBlock key={`${pizza.id.toString(2)}`} {...pizza} />)
          : Array(lengthPizzas).fill(0).map((i, index) => <PizzaLoading key={index} />)}


      </div>
    </div>
  )
}

export default Home
