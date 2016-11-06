import * as types from '../constants/actionTypes'

export function updateSearchTerm(value) {
  return {
    type: types.SEARCH_UPDATE_TERM,
    value
  }
}