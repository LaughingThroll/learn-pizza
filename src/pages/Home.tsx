import React from 'react'

import { Pizzas } from '../components/index'
import { Categories, Sort } from '../components'
import { CATEGORIES_ARR, SORTING_ARR } from '../const'

const Home = () => {
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={CATEGORIES_ARR} />
        <Sort sorters={SORTING_ARR} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Pizzas />
      </div>
    </div>
  )
}

export default Home
