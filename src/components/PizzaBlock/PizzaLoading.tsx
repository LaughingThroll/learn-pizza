
import React from 'react'
// import ContentLoader from 'react-content-loader'

interface IProps { }

const PizzaLoading: React.FC<IProps> = () => {
  return (
    <div  className="pizza-block pizza-block--loading">
    <div className="pizza-block__image"/>
    <div className="pizza-block__title"></div>
    <div className="pizza-block__selector">
    </div>
    <div className="pizza-block__bottom">
      <div className="pizza-block__price"></div>
      <div className="pizza-block__button button button--outline button--add">
      </div>
    </div>
  </div>
  )
}

export default PizzaLoading