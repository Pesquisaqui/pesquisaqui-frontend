import React from 'react'
import logo from './logo.png'
import profilepic from './profilepic.png'
import search from "./search.png"
import book from "./book.png"

const HomePage = (props) => (
  <div>
    <div className="jumbotron">
      <img src={logo} className="mx-auto d-block" alt="Pesquisaqui" height="100"/>
    </div>
    <div className="row">
      <div className="col-lg-4">
          <img src={profilepic} className="mx-auto d-block"height="140" width="140"/>+
        <h2 className="text-xs-center">Meu Perfil</h2>
        <p className="text-xs-center">
          Acesse o seu perfil
        </p>
      </div>
      <div className="col-lg-4">
        <img src={search} className="mx-auto d-block"height="140" width="140"/>
        <h2 className="text-xs-center">Busca</h2>
        <p className="text-xs-center">
          Procure um pesquisador na área desejada
        </p>
      </div>
      <div className="col-lg-4">
        <img src={book} className="mx-auto d-block"height="140" width="140"/>
        <h2 className="text-xs-center">Metodologia</h2>
        <p className="text-xs-center">
          Acesse nosso portal de metodologia
        </p>
      </div>
    </div>
  </div>
)

export default HomePage