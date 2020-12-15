import React from 'react'
import { filterPayload } from '../types'

interface CategoriesTypeProps {
  categories: string[],
  activeCategory: filterPayload,
  onSetCategory: (index: filterPayload) => void
}


const Categories = ({ activeCategory, categories, onSetCategory }: CategoriesTypeProps): JSX.Element => {

  const selectActive = (index: filterPayload) => (e: React.MouseEvent<HTMLLIElement>): void => {
    onSetCategory(index)
  }

  return (
    <ul className="categories">
      <li className={`categories__item ${activeCategory === null ? 'categories__item--active' : ''}`} onClick={selectActive(null)} >Все</li>
      {categories.map((category, index) => <li key={category + index} className={`categories__item ${activeCategory === index ? 'categories__item--active' : ''}`} onClick={selectActive(index)}> {category} </li>)}
    </ul>
  )
}

export default React.memo(Categories)
