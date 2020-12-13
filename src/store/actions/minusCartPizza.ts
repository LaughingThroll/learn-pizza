import { CartEnum } from '../enums'
import { CartActions } from '../types'

const minusCartPizza = (payload: string): CartActions => ({
  type: CartEnum.MINUS,
  payload
})

export default minusCartPizza