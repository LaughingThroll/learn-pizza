import { PizzasEnum } from '../enums'
import { PizzasActions } from '../types'

const setPizzasLoaded = (payload: boolean): PizzasActions => ({
  type: PizzasEnum.LOADED,
  payload
})

export default setPizzasLoaded