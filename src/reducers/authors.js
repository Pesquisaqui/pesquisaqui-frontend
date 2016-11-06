import * as types from '../constants/actionTypes'

const authors = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_AUTHORS_SUCCESS:
      return action.response
    default:
      return state
  }
}

export default authors

export function getAuthors(state) {
  return state
}

export function getAuthor(state, id) {
  const match = state.find(s => s.id === id)
  if (match === undefined) {
    return {}
  }
  return match
}