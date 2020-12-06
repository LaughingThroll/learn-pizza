import { CartEnum } from '../enums'
import { ICartPizza, IAddCartActionTypes } from '../types'


const addToCart = (payload: ICartPizza): IAddCartActionTypes => ({
  type: CartEnum.ADD,
  payload
})

export default addToCart