import { ICartPizza } from '../../types'
import { CartEnum } from '../enums'
import { CartActions } from '../types'


const addToCart = (payload: ICartPizza): CartActions => ({
  type: CartEnum.ADD,
  payload
})

export default addToCart