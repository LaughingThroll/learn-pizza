import { IFiltersStateTypes } from '../../types'
import { FilterEnum } from '../enums'
import { FiltersActions } from '../types'



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