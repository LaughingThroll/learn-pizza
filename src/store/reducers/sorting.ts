interface SortingActionType {
  type: string,
  payload: string 
}

const initialState = {
  sortBy: 'rating'
}



 const sorting = (state = initialState, action: SortingActionType) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload
    }
  }
  return state
}

export default sorting