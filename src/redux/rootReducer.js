import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import user from './modules/user'

export default combineReducers({
  counter,
  user,
  router
})
