import { combineReducers } from 'redux'
import sorting from './sorting'
import filters from './filters'
import pizzasReducer from './pizzas'
import cart from './cart'

const rootReducer = combineReducers({
  sorting,
  filters,
  pizzasReducer,
  cart
})

export default rootReducer