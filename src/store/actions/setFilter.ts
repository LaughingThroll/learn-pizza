import { filterPayload } from '../../types'
import { FilterEnum } from '../enums'
import { FiltersActions } from '../types'

const setFilter = (payload: filterPayload): FiltersActions => ({
  type: FilterEnum.SET,
  payload
})


export default setFilter