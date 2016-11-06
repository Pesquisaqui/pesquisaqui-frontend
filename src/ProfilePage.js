import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SearchTypes } from './SearchPage'
import * as selectors from './reducers'

const ProfilePage = ({ author, params, contacts }) => (
  <div>
    <div className="row App-header">
      <div className="col-xs-12 col-sm-2 pull-md-right">
        <img src={author.avatar} alt="..." className="img-thumbnail" />
      </div>
      <div className="col-xs-12 col-sm-10 flex-xs-bottom">
        <h2 className="mb-0">{author.name} {author.surname}</h2>
        <p className="my-0">{author.affiliation}</p>
        <p className="my-0"></p>
      </div>
    </div>
    <div className="row Profile-field">
      <div className="col-xs-12 col-sm-10 offset-sm-2">
        {(author.email || author.phone ? (
          <div>
            <h5>Contato</h5>
            <dl>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${author.email}`}>{author.email}</a></dd>
              <dt>Telefone</dt>
              <dd>{author.phone}</dd>
            </dl>
          </div>
        ) : null)}

        <h5>Interesses de pesquisa</h5>
        <ul class="list-group">
          {author.researchFocus.map(foc => <li>{SearchTypes[foc['@abbrev']]}</li>)}
        </ul>

        <h5>Artigos</h5>
        <ul class="list-group">
          {author.documents.map(doc => <li><strong>{doc.title}</strong> - <em>{doc.journal}</em> ({doc.year})</li>)}
        </ul>

        <h5>Pesquisadores relacionados</h5>
        { contacts ? (
          <ul class="list-group">
            {contacts.map((person, i) => <li key={i}><Link to={`/usuarios/${person.id}`}>{person.name} {person.surname}</Link></li>)}
          </ul>
        ) : null}



      </div>
    </div>
  </div>
)

function mapStateToProps(state, ownProps) {
  let id
  try {
    id = ownProps.params.userId
    if (id === undefined) {
      throw new Error('undefined id, trying to get CurrentUser from state')
    }
  } catch (error) {
    id = selectors.getCurrentUser(state)
  }
  const currentUser = selectors.getCurrentUser(state)
  const ownProfile = id === currentUser
  console.log("id", id)
  const author = selectors.getAuthor(state, id)
  console.log("author", author)
  let contacts = undefined
  if (author.contacts && author.contacts.length) {
    contacts = author.contacts.map(cId => selectors.getAuthor(state, cId))
  }
  return { author, ownProfile, contacts }
}

export default connect(mapStateToProps)(ProfilePage)