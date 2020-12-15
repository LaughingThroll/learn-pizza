import React from 'react'
import { useStore } from 'effector-react'

import { $cart, $totalPrice, $totalCount } from '../models/states'
import { clearCart, removeGroupFromCart, plusPizza, minusPizza } from '../models/cart/index'
import { CartEmpty, CartBody } from './../components'

import { IOneOfPizzasTypes } from '../types'

function Cart() {
  const cart = useStore($cart)
  const totalPrice = useStore($totalPrice)
  const totalCount = useStore($totalCount)
 
  const onClearCart = (): void => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) clearCart()
  }
  const onRemoveGroupFromCart = (path: string): void => {
    if (window.confirm('Вы действительно хотите удалить?')) removeGroupFromCart(path)
  }


  const onPlusPizza = (path: string): void => { plusPizza(path) }
  const onMinusPizza = (path: string): void => { minusPizza(path) }

  const onPayPizza = () => {
    alert('Ты почти оплатил свою пиццу. Зайди в консоль, чтобы посмотреть что ты заказал')
    console.log('Твоя пицца', cart)
  }

  const oneOfPizzas: IOneOfPizzasTypes[] = Object.keys(cart).flatMap(id => {
    return Object.keys(cart[id]).flatMap(type => {
      return Object.keys(cart[id][type]).flatMap(size => {
        const thisObj = cart[id][type][size]
        const name = thisObj.thisPizzas.length ? thisObj.thisPizzas[0].name : ''
        const imageUrl = thisObj.thisPizzas.length ? thisObj.thisPizzas[0].imageUrl : ''
        return {
          id,
          name,
          imageUrl,
          type,
          size,
          allPrice: thisObj.thisAllPrice,
          allCount: thisObj.thisAllCount
        }
      })
    })
  })

  return (
    <div className="container container--cart">
      {totalCount ? <CartBody 
      oneOfPizzas={oneOfPizzas} 
      onRemoveGroupFromCart={onRemoveGroupFromCart}  
      onClearCart={onClearCart} 
      totalPrice={totalPrice} 
      totalCount={totalCount}
      onPlusPizza={onPlusPizza} 
      onMinusPizza={onMinusPizza}
      onPayPizza={onPayPizza}
      /> 
      : <CartEmpty /> }
    </div>
  )
}

export default Cart
