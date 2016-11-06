import * as types from '../constants/actionTypes'
import * as api from '../utils/webApi'

export function fetchAuthors() {
  return dispatch => {
    dispatch(fetchAuthorsRequest())
    // Fetch authors
    api.fetchAuthors()
    .then(response => dispatch(fetchAuthorsSuccess(response)))
    .catch(error => dispatch(fetchAuthorsFailed(error)))
  }
}

export function fetchAuthorsRequest() {
  return {
    type: types.FETCH_AUTHORS_REQUEST
  }
}

export function fetchAuthorsSuccess(response) {
  return {
    type: types.FETCH_AUTHORS_SUCCESS,
    response
  }
}

export function fetchAuthorsFailed(error) {
  return {
    type: types.FETCH_AUTHORS_FAILED,
    error
  }
}