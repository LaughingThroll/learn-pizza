import { ISortStateTypes } from '../../types'
import { SortEnum } from '../enums'
import { SortActions } from '../types'



const initialState: ISortStateTypes = {
  sortBy: 'rating'
}



 const sorting = (state = initialState, action: SortActions) => {
  if (action.type === SortEnum.SET) {
    return {
      ...state,
      sortBy: action.payload
    }
  }
  return state
}

export default sorting