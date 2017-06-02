import { combineReducers } from 'redux'

import tabbar from './tabbar'
import test from './test'

const reducers = combineReducers({
  tabbar,
  test
})

export default reducers
