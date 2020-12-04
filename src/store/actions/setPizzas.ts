import { PizzaType } from '../reducers/pizzas'
import { SetPizzasEnum } from '../enums'

const setPizzas = (pizzas: PizzaType[]) => ({
  type: SetPizzasEnum.SET,
  payload: pizzas
})


export default setPizzas



 