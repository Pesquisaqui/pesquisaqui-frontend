import firebase from 'firebase'

export function fetchAuthors() {
  return new Promise((fulfill, reject) => {
    try {
      const responseObject = require('../api/authors').default
      const response = responseObject["search-results"].entry.map(author => {
        let subjects = author['subject-area']
        if (subjects !== undefined) {
          if (subjects.length === undefined) {
            subjects = [subjects]
          }
        }
        let area 
        return {
          id: author.eid,
          name: author['preferred-name']['given-name'],
          surname: author['preferred-name'].surname,
          affiliation: author['affiliation-current']['affiliation-name'],
          area: subjects ? subjects.reduce((prev, cur) => parseInt(cur['@frequency']) > parseInt(prev['@frequency']) ? cur : prev) : null,
          subarea: null,
          avatar: null,
          email: null,
          phone: null,
          researchFocus: subjects ? subjects : [],
          hasRegistered: false,
          canHelp: false,
          methodologyTypes: [],
          contacts: [],
          points: 0
        }
      })
      fulfill(response)
    } catch (error) {
      reject(error)
    }
  })
}

export function test() {
  return "hello world"
}