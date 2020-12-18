import React from 'react'
import { observer } from 'mobx-react-lite'

import PizzaBlock  from './PizzaBlock'
import PizzaLoading from './PizzaLoading'

import PizzasStore from '../../models/PizzasStore'

import { IPizzaTypes } from '../../types' 


const Pizzas = () => {
  const { isLoaded, pizzas, length } = PizzasStore
  return (
    <>
    { isLoaded ? pizzas.map((pizza: IPizzaTypes) => <PizzaBlock key={`${pizza.id}_${pizza.name}`} {...pizza} />)
          : Array(length).fill(0).map((i, index) => <PizzaLoading key={index} />) }
    </>
  )
}

export default observer(Pizzas)
