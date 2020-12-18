import React from 'react'
import { observer } from 'mobx-react-lite'

import PizzasStore from '../models/PizzasStore'

type CategoriesTypeProps = {
  categories: string[],
}


const Categories = ({ categories }: CategoriesTypeProps): JSX.Element => {
  
  const selectActive = (index: number | null) => (e: React.MouseEvent): void => {
    PizzasStore.filter = index  
  }
  return (
    <ul className="categories">
      <li className={`categories__item ${ PizzasStore.filter === null ? 'categories__item--active' : ''}`} onClick={selectActive(null)} >Все</li>
      {categories.map((category, index) => <li key={category + index} className={`categories__item ${ PizzasStore.filter === index ? 'categories__item--active' : ''}`} onClick={selectActive(index)}> {category} </li>)}
    </ul>
  )
}

export default observer(Categories)
