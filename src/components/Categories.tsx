import React, { useState } from 'react'

type activeType = number | null

interface CategoriesTypeProps {
  categories: string[],
  onFilter: (index: activeType) => void
}


const Categories = ({ categories, onFilter }: CategoriesTypeProps): JSX.Element => {

  const [active, setActive] = useState<activeType>(null)
  
  const selectActive = (index: activeType) => (e: React.MouseEvent): void => {
    setActive(index)
    onFilter(index)
  }

  return (
    <ul className="categories">
      <li className={`categories__item ${active === null ? 'categories__item--active' : ''}`} onClick={selectActive(null)} >Все</li>
      {categories.map((category, index) => <li key={category + index} className={`categories__item ${active === index ? 'categories__item--active' : ''}`} onClick={selectActive(index)}> {category} </li>)}
    </ul>
  )
}

export default React.memo(Categories)
