import { combineReducers } from 'redux'
import authors from './authors'
import search from './search'
import login from './login'
import * as fromAuthors from './authors'
import * as fromSearch from './search'
import * as fromLogin from './login'


export default combineReducers({
  authors,
  search,
  login
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

export function getCurrentUser(state) {
  return fromLogin.getCurrentUser(state.login)
}