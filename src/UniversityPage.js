import React from 'react'
import { Link, Match } from 'react-router'

const Campus = () => (
  <div>
    CAMPUS
  </div>
) 

const Transporte = () => (
  <div>
    TRANPORTE
  </div>
)

const Alimentacao = () => (
  <div>
    ALIMENTACAO
  </div>
)

const Aplicativos = () => (
  <div>
    APLICATIVOS
  </div>
)

const UniversityPage = (props) => (
  <div className="row pt-1">
    {/* MENU DA UNIVERSIDADE */}
    <div className="col-md-3">
      <h5>Páginas principais</h5>
      <ul className="nav nav-stacked nav-pills">
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/universidade/campus">O campus</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/universidade/transporte">Transporte</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/universidade/alimentacao">Alimentação</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/universidade/aplicativos">Aplicativos</Link>
        </li>
      </ul>
    </div>

    <div className="col-md-9">
      <Match pattern="/universidade/campus" component={Campus} />
      <Match pattern="/universidade/transporte" component={Transporte} />
      <Match pattern="/universidade/alimentacao" component={Alimentacao} />
      <Match pattern="/universidade/aplicativos" component={Aplicativos} />
    </div>

  </div>
)

export default UniversityPage