import { IPizzaTypes } from '../../types'
import { PizzasEnum } from '../enums'
import { PizzasActions } from '../types' 

const setPizzas = (payload: IPizzaTypes[]): PizzasActions => ({
  type: PizzasEnum.SET,
  payload
})


export default setPizzas



 