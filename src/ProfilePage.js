import React from 'react'
import { connect } from 'react-redux'
import * as selectors from './reducers'

const ProfilePage = ({author, params}) => (
  <div>
    <div className="row App-header">
      <div className="col-xs-12 col-sm-2 pull-md-right">
        <img src="http://placehold.it/100x100" alt="..." className="img-thumbnail" />
      </div>
      <div className="col-xs-12 col-sm-10 flex-xs-bottom">
        <h2 className="mb-0">{author.name}</h2>
        <p className="my-0">{author.affiliation}</p>
        <p className="my-0">{author.area}</p>
      </div>
    </div>
    <div className="row Profile-field">
      <div className="col-xs-12 col-sm-10 offset-sm-2">
        <h4>Contato</h4>
        <h4>Interesses de pesquisa</h4>
        
        <h4>Sou expert em</h4>
      </div>
    </div>
  </div>
)

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.userId
  console.log("id", id)
  const author = selectors.getAuthor(state, id)
  return { author }
}

export default connect(mapStateToProps)(ProfilePage)