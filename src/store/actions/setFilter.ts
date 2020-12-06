import { FilterEnum } from '../enums'
import { FiltersActions, filterPayload } from '../types'

const setFilter = (payload: filterPayload): FiltersActions => ({
  type: FilterEnum.SET,
  payload
})


export default setFilter