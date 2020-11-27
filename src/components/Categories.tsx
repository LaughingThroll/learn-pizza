import React, { useState } from 'react'

interface CategoriesTypeProps {
  categories: string[]
}


function Categories({ categories }: CategoriesTypeProps): JSX.Element {

  const [active, setActive] = useState<null | number>(null)

  const selectActive = (index: number | null) => (e: React.MouseEvent): void => {
    setActive(index)
  }

  return (
    <ul className="categories">
      <li className={`categories__item ${active === null ? 'categories__item--active' : ''}`} onClick={selectActive(null)} >Все</li>
      {categories.map((category, index) => <li key={category + index} className={`categories__item ${active === index ? 'categories__item--active' : ''}`} onClick={selectActive(index)}> {category} </li>)}
    </ul>
  )
}

export default Categories
