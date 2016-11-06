import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Match, Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchAuthors } from './actions/authorActions'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import ArticlePage from './ArticlePage'
import 'bootstrap/dist/css/bootstrap-flex.css'
import './App.css';

const Header = ({activePath}) => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <span className="navbar-brand">
        Pesquisaqui
      </span>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link activeOnlyWhenExact activeClassName="active" className="nav-link" to="/">Início<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link activeOnlyWhenExact activeClassName="active" className="nav-link" to="/perfil">Meu perfil</Link>
        </li>
        <li className="nav-item">
          <Link activeOnlyWhenExact activeClassName="active" className="nav-link" to="/busca">Busca</Link>
        </li>
        <li className="nav-item">
          <Link activeOnlyWhenExact activeClassName="active" className="nav-link" to="/metodologia">Metodologia</Link>
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
            <Match pattern="/perfil" component={ProfilePage} />
            <Match pattern="/busca" component={SearchPage} />
            <Match pattern="/usuarios/:id" component={ProfilePage} />
            <Match pattern="/artigos/:id" component={ArticlePage} />
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
