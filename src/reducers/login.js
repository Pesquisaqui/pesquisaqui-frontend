import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const loggedIn = (state = true, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const currentUser = (state = "9-s2.0-6602715200", action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  loggedIn,
  currentUser
})

export function getCurrentUser(state) {
  return state.currentUser
}