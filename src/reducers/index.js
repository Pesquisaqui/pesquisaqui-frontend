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

export function getAuthor(state, id) {
  return fromAuthors.getAuthor(state.authors, id)
}

export function getSearchTerm(state) {
  return fromSearch.getSearchTerm(state.search)
}