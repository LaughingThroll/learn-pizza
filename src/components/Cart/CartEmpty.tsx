import React from 'react'
import { Link } from 'react-router-dom'

import cartEmpty from '../../assets/img/empty-cart.png'

const CartEmpty = () => {
  return (
    <div className="cart cart-empty">
      <h2 className="cart-empty__title">Корзина пустая <span>😕</span></h2>
      <p className="cart-empty__text">
        Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
      <img className="cart-empty__img" src={cartEmpty} alt="Empty cart" />
      <Link to="/" className="cart-empty__button button button--black">
        Вернуться назад
      </Link>
    </div>
  )
}

export default CartEmpty
