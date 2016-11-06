import React from 'react'
import { connect } from 'react-redux'
import * as selectors from './reducers'

const SearchBar = (props) => (
  <div className="row py-1">
    <div className="col-xs-12">
      <form>
        <input className="form-control" placeholder="Pesquisar tópicos" />
      </form>
    </div>
  </div>
)

const SearchResult = (props) => (
  <div className="card card-block">
    <h4 className="card-title">{`${props.name['given-name']} ${props.name['surname']}`}</h4>
    <p className="card-text">Resultado</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
)

const SearchPage = (props) => (
  <div>
    <SearchBar />
    {props.authors.map(author => <SearchResult key={author.eid} name={author["preferred-name"]} />)}
    
  </div>
)

function mapStateToProps(state) {
  return {
    authors: selectors.getAuthors(state)
  }
}

export default connect(mapStateToProps)(SearchPage)