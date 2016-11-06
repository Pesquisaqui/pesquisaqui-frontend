import * as types from '../constants/actionTypes'

const search = (state = "", action) => {
  switch(action.type) {
    case types.SEARCH_UPDATE_TERM:
      return action.value
    default:
      return state
  }
}

export default search

export function getSearchTerm(state) {
  return state
}