import React from 'react'

import { Categories, Sort, PizzaBlock } from '../components'
import { PizzaType } from '../App'

const categoriesArr = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortingArr = ['популярности', 'цене', 'алфавиту']


interface HomePropsType {
  pizzas: PizzaType[]
}


function Home({ pizzas }: HomePropsType) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categoriesArr} />
        <Sort sorters={sortingArr} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}


      </div>
    </div>
  )
}

export default Home
