import { PizzasEnum } from '../enums'
import { PizzasActions } from '../types'

const setPizzasLength = (payload: number): PizzasActions => ({
  type: PizzasEnum.LENGTH,
  payload
})


export default setPizzasLength