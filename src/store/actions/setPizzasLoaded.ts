import { SetPizzasEnum } from '../enums'

const setPizzasLoaded = (loaded: boolean) => ({
  type: SetPizzasEnum.LOADED,
  payload: loaded
})

export default setPizzasLoaded