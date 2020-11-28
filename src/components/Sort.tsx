import React, { useState, useEffect, useRef } from 'react'
import sortArrow from '../assets/img/sort-arrow.svg'

interface SortingPropsType {
  sorters: string[]
}

function Sort({ sorters }: SortingPropsType): JSX.Element {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false)
  const [sorterActive, setSorterActive] = useState<number>(0)
  const sortRef = useRef<HTMLDivElement>(null)

  const togglePopup = (): void => {
    setVisiblePopup(!visiblePopup)
  }

  const handleActiveSort = (index: number) => (e: React.MouseEvent) => {
    setSorterActive(index)
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
        <span className="sort-label__category" onClick={togglePopup}>{sorters[sorterActive]}</span>
      </div>
      {visiblePopup && <ul className="sort__popup sort-popup">
        {sorters.map((sorter, index) => {
          return <li key={`${sorter}_${index}`} className={`sort-popup__item ${sorterActive === index ? 'sort-popup__item--active' : ''}`} onClick={handleActiveSort(index)}>{sorter}</li>
        })}
      </ul>}
    </div>
  )
}

export default Sort
