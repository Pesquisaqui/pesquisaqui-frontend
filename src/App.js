import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchAuthors } from './actions/authorActions'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import ArticlePage from './ArticlePage'
import UniversityPage from './UniversityPage'
import 'bootstrap/dist/css/bootstrap-flex.css'
import './App.css';
import logo from './logo.png'

const Header = ({activePath}) => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <Link className="navbar-brand" to="/perfil">
        <img src={logo} alt="Pesquisaqui" height="30" />
      </Link>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/busca">Busca</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/metodologia">Metodologia</Link>
        </li>
        <li className="nav-item">
          <Link activeClassName="active" className="nav-link" to="/universidade">Universidade</Link>
        </li>
      </ul>
    </div>
  </nav>
)

class App extends Component {
  componentWillMount() {
    this.props.fetchAuthors()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Match exactly pattern="/" component={HomePage} />
            <Match exactly pattern="/perfil" component={ProfilePage} />
            <Match pattern="/busca" component={SearchPage} />
            <Match pattern="/usuarios/:userId" component={ProfilePage} />
            <Match pattern="/artigos/:id" component={ArticlePage} />
            <Match pattern="/universidade" component={UniversityPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAuthors() {
      dispatch(fetchAuthors())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
