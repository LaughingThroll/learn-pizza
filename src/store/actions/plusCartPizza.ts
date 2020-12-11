import { CartEnum } from '../enums'
import { CartActions } from '../types'

const plusCartPizza = (payload: string): CartActions => ({
  type: CartEnum.PLUS,
  payload
})

export default plusCartPizza