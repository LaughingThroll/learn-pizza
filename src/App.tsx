import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components/index'
import { Home, Cart } from './pages/index'
import { URL } from './const'
import { ID } from './types'

export interface PizzaType {
  id: ID,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}


function App() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([])

  useEffect(() => {
    axios.get(URL).then(res => setPizzas(res.data))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </main>
    </div>
  )
}

export default App
