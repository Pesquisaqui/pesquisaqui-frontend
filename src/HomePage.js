import React from 'react'
import logo from './logo.png'
import profilepic from './profilepic.png'

const HomePage = (props) => (
  <div>
    <div className="jumbotron">
      <img src={logo} className="mx-auto d-block" alt="Pesquisaqui" height="100"/>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <img src={profilepic} className="mx-auto d-block"height="140" width="140"/>
        <h2>Meu Perfil</h2>
        <p>
          Acesse o seu perfil
        </p>
      </div>
      <div className="col-lg-4">
        <img src={profilepic} className="mx-auto d-block"height="140" width="140"/>
        <h2>Meu Perfil</h2>
        <p>
          Acesse o seu perfil
        </p>
      </div>
      <div className="col-lg-4">
        <img src={profilepic} className="mx-auto d-block"height="140" width="140"/>
        <h2>Meu Perfil</h2>
        <p>
          Acesse o seu perfil
        </p>
      </div>
    </div>
  </div>
)

export default HomePage