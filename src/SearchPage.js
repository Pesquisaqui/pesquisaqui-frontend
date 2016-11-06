import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { remove } from 'diacritics'
import includes from 'lodash/includes'
import some from 'lodash/some'
import trim from 'lodash/trim'
import * as selectors from './reducers'
import { updateSearchTerm } from './actions/searchActions'


const SearchTypes = {
  AGRI: 'Ciências Biológicas e Agrícolas',
  ARTS: 'Arte e Humanidades',
  BIOC: 'Bioquímica, Genética e Biologia Molecular',
  BUSI: 'Negócios, Administração e Contabilidade',
  CENG: 'Engenharia Química',
  CHEM: 'Química',
  COMP: 'Ciência da Computação',
  DECI: 'Ciências da Decisão',
  DENT: 'Odontologia',
  EART: 'Terra e Ciências Geológicas',
  ECON: 'Economia, Econometria e Finança',
  ENER: 'Energia',
  ENGI: 'Engenharia',
  ENVI: 'Ciências do Meio-ambiente',
  HEAL: 'Saúde',
  IMMU: 'Imunologia e Microbiologia',
  MATE: 'Ciência dos Materiais',
  MATH: 'Matemática',
  MEDI: 'Medicina',
  NEUR: 'Neurociência',
  NURS: 'Enfermagem',
  PHAR: 'Farmacologia, Toxicologia e Farmacêuticos',
  PHYS: 'Física e Astronomia',
  PSYC: 'Psicologia',
  SOCI: 'Ciências Sociais',
  VETE: 'Veterinária',
  MULT: 'Multidisciplinar',
}

const SearchBar = (props) => (
  <div className="row py-1">
    <div className="col-xs-12">
      <form>
        <input value={props.value} onChange={props.updateValue} className="form-control" placeholder="Pesquisar tópicos" />
      </form>
    </div>
  </div>
)

const SearchResult = (props) => (
  <div className="card card-block">
    <h4 className="card-title">
      <Link to={`/usuarios/${props.id}`}>
        {`${props.name} ${props.surname}`}
      </Link>
    </h4>
    <p className="card-text">{props.affiliation}</p>
    {props.researchFocus && props.researchFocus.length ? props.researchFocus.map((item, i) => (
      <span key={i}><span className="tag tag-default">{SearchTypes[item['@abbrev']]}</span> </span>
    )) : null}
  </div>
)

class SearchPage extends React.Component {

  render() {
    return (
      <div>
        <SearchBar updateValue={this.props.updateSearchTerm} />
        <div>
          {this.props.matchingAuthors.map(author => (
            <SearchResult
              key={author.id}
              id={author.id}
              name={author.name}
              surname={author.surname}
              affiliation={author.affiliation}
              researchFocus={author.researchFocus}
            />
          ))}
        </div>
      </div>
    )
  }
}

function selectMatchingAuthors(searchTerm, author) {
  if (trim(searchTerm) === "") {
    return true
  } 
  const researchFoci = author.researchFocus.map(i => remove(SearchTypes[i['@abbrev']]).toLowerCase())
  const lowerSearchTerm = remove(searchTerm).toLowerCase()
  return some(researchFoci, focusName => includes(focusName, searchTerm))
}

function mapStateToProps(state, ownProps) {
  const searchTerm = selectors.getSearchTerm(state)
  const authors = selectors.getAuthors(state)
  const matchingAuthors = authors.filter(author => selectMatchingAuthors(searchTerm, author))
  return {
    authors,
    matchingAuthors,
    searchTerm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchTerm(e) {
      console.log(e.target.value)
      dispatch(updateSearchTerm(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)