import React, { useState, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import sortArrow from '../assets/img/sort-arrow.svg'

import { SortingObjectType } from './../const'
import PizzasStore from '../models/PizzasStore'

type SortingPropsType = {
  sorters: SortingObjectType[],
}
const Sort = ({  sorters }: SortingPropsType): JSX.Element => {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false)

  const sortRef = useRef<HTMLDivElement>(null)

  const togglePopup = (): void => {
    setVisiblePopup(!visiblePopup)
  }

  const handleActiveSort = (type: string) => (e: React.MouseEvent) => {
    PizzasStore.sortBy = type
    setVisiblePopup(false)
  }

  const handleOutsideSort = ({ path }: any): void => {
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  useEffect(() => {

    window.addEventListener('click', handleOutsideSort)
    
    return () => window.removeEventListener('click', handleOutsideSort)
  }, [])

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label sort-label">
        <img className={`sort-label__arrow ${visiblePopup ? 'sort-label__arrow--active' : ''}`} src={sortArrow} alt="" />
        <b className="sort-label__text">Сортировка по:</b>
        <span className="sort-label__category" onClick={togglePopup}>{sorters.find((item: SortingObjectType) => item.type === PizzasStore.sortBy)?.name}</span>
      </div>
      {visiblePopup && <ul className="sort__popup sort-popup">
        {sorters.map(({ name, type }, index) => {
          return <li key={`${type}_${index}`} className={`sort-popup__item ${PizzasStore.sortBy === type ? 'sort-popup__item--active' : ''}`} onClick={handleActiveSort(type)}>{name}</li>
        })}
      </ul> }
    </div>
  )
}

export default observer(Sort)
