import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CartEmpty, CartBody } from './../components'

import { IOneOfPizzasTypes } from '../types'

import { clearCart, removeGroupFromCart, plusCartPizza, minusCartPizza } from '../store/actions'



function Cart() {
  const dispatch = useDispatch()
  const { totalCount, totalPrice, cartPizzas } = useSelector(({ cart }: any) => cart)

  const onClearCart = (): void => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) dispatch(clearCart)
  }
  const onRemoveGroupFromCart = (path: string): void => {
    if (window.confirm('Вы действительно хотите удалить?')) dispatch(removeGroupFromCart(path))
  }


  const onPlusPizza = (path: string): void => {dispatch(plusCartPizza(path))}
  const onMinusPizza = (path: string): void => {dispatch(minusCartPizza(path))}

  const oneOfPizzas: IOneOfPizzasTypes[] = Object.keys(cartPizzas).flatMap(id => {
    return Object.keys(cartPizzas[id]).flatMap(type => {
      return Object.keys(cartPizzas[id][type]).flatMap(size => {
        const thisObj = cartPizzas[id][type][size]
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
      /> 
      : <CartEmpty /> }
    </div>


  )
}

export default Cart
