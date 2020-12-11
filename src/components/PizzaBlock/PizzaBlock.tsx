import React, { useState } from 'react'
import classNames from 'classnames'

import Button from '../Button' 

import { IPizzaTypes, ICartPizza } from '../../types'

import { TYPES_PIZZAS, AVAILABLE_SIZES } from '../../const'



interface IPizzaBlockPropsTypes extends IPizzaTypes  {
  onClickAddToCart: (action: ICartPizza) => void,
  count: number
}

function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddToCart, count }: IPizzaBlockPropsTypes): JSX.Element {
  const [activeType, setActiveType] = useState<number>(types[0])
  const [activeSize, setActiveSize] = useState<number>(sizes[0])
 

  const setActiveTypePizza = (index: number) => (e: React.MouseEvent): void =>  setActiveType(index)
  const setActiveSizePizza = (index: number) => (e: React.MouseEvent): void =>  setActiveSize(index)

  const handleAddPizza = (): void => {
    onClickAddToCart({
      id, 
      name, 
      imageUrl, 
      price, 
      type: TYPES_PIZZAS[activeType], 
      size: activeSize
      })
  }

  return (
    <div  className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt={name}
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        
        <ul className="selector selector--by-dough">
          {TYPES_PIZZAS.map((name, index) => {
            return   <li 
            key={`${name}_${index}`} 
            className={classNames({
              "selector__item": true,
              "selector__item--active": activeType === index,
              "selector__item--disabled": !types.includes(index)
            })} 
            onClick={setActiveTypePizza(index)}>{name}</li>
          })}
        </ul>
        <ul className="selector selector--by-sizes">
        {AVAILABLE_SIZES.map((size, index) => {
            return   <li 
            key={`${size}_${index}`} 
            className={classNames({
              "selector__item": true,
              "selector__item--active": activeSize === size,
              "selector__item--disabled": !sizes.includes(size)
            })} 
            onClick={setActiveSizePizza(size)}>{size} см.</li>
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="pizza-block__button button--add" onClick={handleAddPizza} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        {count && <i>{count}</i>}
        </Button>
      </div>
    </div>
  )
}

export default PizzaBlock
