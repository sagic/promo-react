import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import user from './modules/user'
import promo from './modules/promo'

export default combineReducers({
  counter,
  user,
  promo,
  router
})
