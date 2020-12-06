import { FilterEnum } from '../enums'
import { filterPayload, FiltersActions } from '../types'

interface IFiltersStateTypes {
  filter: filterPayload
}

const initialState: IFiltersStateTypes = {
  filter: null
}

const filters = (state = initialState, action: FiltersActions) => {
    if (action.type === FilterEnum.SET) {
      return {
        ...state,
        filter: action.payload
      }
    }
    return state
}

export default filters