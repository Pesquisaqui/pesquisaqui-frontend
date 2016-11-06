import firebase from 'firebase'

export function fetchAuthors() {
  return new Promise((fulfill, reject) => {
    try {
      const responseObject = require('../api/authors').default
      const response = responseObject["search-results"].entry
      fulfill(response)
    } catch (error) {
      reject(error)
    }
  })
} 

export function test() {
  return "hello world"
}