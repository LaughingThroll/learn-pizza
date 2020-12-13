import { removeGroupFromCartTypes } from '../../types'
import { CartActions } from '../types'
import { CartEnum } from '../enums'


const removeGroupFromCart = (payload: removeGroupFromCartTypes): CartActions => ({
  type: CartEnum.REMOVE_GROUP,
  payload
})

export default removeGroupFromCart