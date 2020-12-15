import React, { useCallback } from 'react'
import { useStore } from 'effector-react'
import { $pizzas, $isLoadedPizzas, $pizzasLength, $cart, $category, $sortBy } from '../models/states' 
import { setCategory } from '../models/categories/index'
import { setSortBy } from '../models/sort/index'
import { addToCart } from '../models/cart/index' 

import { Categories, Sort, PizzaBlock, PizzaLoading } from '../components'
import { CATEGORIES_ARR, SORTING_ARR } from '../const'
import { flatObject } from '../utils'
import { IPizzaTypes, CartPizzasTypes, filterPayload } from '../types'




function Home() {
  const pizzas = useStore($pizzas)
  const isLoaded = useStore($isLoadedPizzas)
  const pizzasLength = useStore($pizzasLength)
  const activeCategory = useStore($category)
  const activeSort = useStore($sortBy) 
  const cart = useStore($cart)

  const onSetCategory = useCallback((index: filterPayload) => setCategory(index), [])
  const onSortBy = useCallback((sort: string) => setSortBy(sort), [])  

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={CATEGORIES_ARR} activeCategory={activeCategory} onSetCategory={onSetCategory} />
        <Sort sorters={SORTING_ARR} activeSort={activeSort} onSortBy={onSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ? pizzas.map((pizza: IPizzaTypes) => <PizzaBlock key={`${pizza.id}_${pizza.name}`} count={cart[pizza.id] && flatObject<CartPizzasTypes, any>(cart[pizza.id], 3).length } onClickAddToCart={(pizza) => addToCart(pizza)} {...pizza} />)
          : Array(pizzasLength).fill(0).map((i, index) => <PizzaLoading key={index} />) }
      </div>
    </div>
  )
}

export default Home
