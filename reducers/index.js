import { combineReducers } from 'redux'
import filters from './filters'
import envs from './env'

const monitorApp = combineReducers({
  filters,
  envs
})

export default monitorApp