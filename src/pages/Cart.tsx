import React from 'react'
import { observer } from 'mobx-react-lite'

import { CartEmpty, CartBody } from './../components'

import CartStore from '../models/CartStore'

const Cart = () => {
  
  const { totalCount } = CartStore
  
  return (
    <div className="container container--cart">
      { totalCount ? <CartBody /> : <CartEmpty /> }
    </div>
  )
}

export default observer(Cart)
