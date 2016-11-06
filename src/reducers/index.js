import { combineReducers } from 'redux'
import authors from './authors'
import * as fromAuthors from './authors'

export default combineReducers({
  authors
})

export function getAuthors(state) {
  return fromAuthors.getAuthors(state.authors)
}

export function getAuthor(state, eid) {
  return fromAuthors.getAuthor(state.authors, eid)
}