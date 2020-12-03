interface FiltersActionType {
  type: string,
  payload: number
}

const initialState = {
  filter: 0
}

const filters = (state = initialState, action: FiltersActionType) => {
    if (action.type === 'SET_FILTER') {
      return {
        ...state,
        filter: action.payload
      }
    }
    return state
}

export default filters