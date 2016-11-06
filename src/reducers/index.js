import { combineReducers } from 'redux'
import authors from './authors'
import search from './search'
import * as fromAuthors from './authors'
import * as fromSearch from './search'


export default combineReducers({
  authors,
  search
})

export function getAuthors(state) {
  return fromAuthors.getAuthors(state.authors)
}

export function getAuthor(state, eid) {
  return fromAuthors.getAuthor(state.authors, eid)
}

export function getSearchTerm(state) {
  return fromSearch.getSearchTerm(state.search)
}