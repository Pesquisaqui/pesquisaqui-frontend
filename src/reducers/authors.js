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

export function getAuthor(state, eid) {
  try {
    return state.filter(s => s.eid ==- eid)[0]
  } catch (error) {
    return undefined
  }
}