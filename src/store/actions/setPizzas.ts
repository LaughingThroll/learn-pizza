import { PizzaType } from '../reducers/pizzas'

const setPizzas = (pizzas: PizzaType[]) => ({
  type: 'SET_PIZZAS',
  payload: pizzas
})


export default setPizzas



 