import React from 'react'

const ProfilePage = (props) => (
  <div>
    <div className="row App-header">
      <div className="col-xs-12 col-sm-2 pull-md-right">
        <img src="http://placehold.it/100x100" alt="..." className="img-thumbnail" />
      </div>
      <div className="col-xs-12 col-sm-10 flex-xs-bottom">
        <h2 className="mb-0">Professor Pascal</h2>
        <p className="my-0">Universidade de São Paulo</p>
        <p className="my-0"> PSI - Departamento de Sistemas Integrados</p>
      </div>
    </div>
    <div className="row Profile-field">
      <div className="col-xs-12 col-sm-10 offset-sm-2">
        <h4>Contato</h4>
        <h4>Intresses de pesquisa</h4>
        <h4>Sou expert em</h4>
      </div>
    </div>
  </div>
)

export default ProfilePage