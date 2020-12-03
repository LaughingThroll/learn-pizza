import { combineReducers } from 'redux'
import sorting from './sorting'
import filters from './filters'
import pizzasReducer from './pizzas'


const rootReducer = combineReducers({
  sorting,
  filters,
  pizzasReducer
})

export default rootReducer