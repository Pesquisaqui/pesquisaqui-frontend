import includes from 'lodash/includes'
import avatar from '../avatar.png'
import martino from '../martino.jpg'
import seabra from '../seabra.png'
import vitor from '../vitor.jpg'
import piqueira from '../piqueira.jpg'

const registered = [
  // SEABRA
  {
    id: '9-s2.0-6603373732',
    subarea: 'Departamento de Engenharia de Sistemas Eletrônicos (PSI)',
    avatar: seabra,
    email: 'acseabra@lsi.usp.br',
    phone: '(11)3091-5660',
    hasRegistered: true,
    canHelp: true,
    methodologyTypes: [],
    contacts: ['9-s2.0-7003917487', '9-s2.0-7005232902'],
    points: 400
  },
  // VITOR
  {
    id: '9-s2.0-7003917487',
    subarea: 'Departamento de Engenharia de Sistemas Eletrônicos (PSI)',
    avatar: vitor,
    email: 'vitor@lps.usp.br',
    phone: '(11)3091-5606',
    hasRegistered: true,
    canHelp: true,
    methodologyTypes: [],
    contacts: ['9-s2.0-6603373732', '9-s2.0-7005232902'],
    points: 230
  },
  // PIQUEIRA
  {
    id: '9-s2.0-6602715200',
    subarea: 'Departamento de Engenharia de Telecomunicações e Controle (PTC)',
    avatar: piqueira,
    email: null,
    phone: null,
    hasRegistered: false,
    canHelp: false,
    methodologyTypes: [],
    contacts: ['9-s2.0-7005232902'],
    points: 0
  },
  // MARTINO
  {
    id: '9-s2.0-7005232902',
    subarea: 'Departamento de Engenharia de Sistemas Eletrônicos (PSI)',
    avatar: martino,
    email: 'martino@lsi.usp.br',
    phone: null,
    hasRegistered: false,
    canHelp: false,
    methodologyTypes: [],
    contacts: ['9-s2.0-6602715200', '9-s2.0-7003917487', '9-s2.0-6603373732'],
    points: 0
  }
]

export function fetchAuthors() {
  return new Promise((fulfill, reject) => {
    try {

      const responseObject = require('../api/authors').default
      const response = responseObject["search-results"].entry.map(author => {
        const id = author.eid
        const isRegistered = includes(registered.map(p => p.id), id)
        let rAuthor
        if (isRegistered) {
          rAuthor = registered.find(p => p.id === id) // registered author
        }
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
          subarea: isRegistered ? rAuthor.subarea : null,
          avatar: isRegistered ? rAuthor.avatar : avatar,
          email: isRegistered ? rAuthor.email : null,
          phone: isRegistered ? rAuthor.phone : null,
          researchFocus: subjects ? subjects : [],
          hasRegistered: isRegistered ? true : false,
          canHelp: isRegistered ? rAuthor.canHelp : false,
          methodologyTypes: [],
          contacts: isRegistered ? rAuthor.contacts : [],
          points: isRegistered ? rAuthor.points : 0,
          documents: author.documents ? author.documents : []
        }
      })
      fulfill(response)
    } catch (error) {
      reject(error)
    }
  })
}
