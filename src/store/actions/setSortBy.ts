import { SortEnum } from '../enums'
import { SortActions } from '../types'

const setSortBy = (payload: string): SortActions => ({
  type: SortEnum.SET,
  payload
})

export default setSortBy


