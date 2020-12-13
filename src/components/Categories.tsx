import React from 'react'

type activeType = number | null

interface CategoriesTypeProps {
  categories: string[],
  activeCategory: activeType,
  onFilter: (index: activeType) => void
}


const Categories = ({ activeCategory, categories, onFilter }: CategoriesTypeProps): JSX.Element => {
  
  const selectActive = (index: activeType) => (e: React.MouseEvent): void => {
    onFilter(index)
  }

  return (
    <ul className="categories">
      <li className={`categories__item ${activeCategory === null ? 'categories__item--active' : ''}`} onClick={selectActive(null)} >Все</li>
      {categories.map((category, index) => <li key={category + index} className={`categories__item ${activeCategory === index ? 'categories__item--active' : ''}`} onClick={selectActive(index)}> {category} </li>)}
    </ul>
  )
}

export default React.memo(Categories)
