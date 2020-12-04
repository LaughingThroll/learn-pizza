import { SetPizzasEnum } from '../enums'

const setPizzasLength = (length: number) => ({
  type: SetPizzasEnum.LENGTH,
  payload: length
})


export default setPizzasLength