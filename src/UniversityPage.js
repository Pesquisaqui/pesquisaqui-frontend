import React from 'react'
import { Link, Match } from 'react-router'
import mapausp1 from './mapausp1.jpg'
import circulares from './circulares.jpg'
import cardapiosusp from './cardapiosusp.jpg'
import campususp from './campususp.jpg'
import jornaldausp from './jornaldausp.jpg'
import bibliotecasusp from './bibliotecasusp.jpg'
import uspdouglas from './uspdouglas.jpg'
import bandex from './bandex.jpg'


const Campus = () => (
  <div>
    <h4>CAMPUS</h4>


   <p> O Campus se localiza na Zona Oeste da Cidade de São Paulo no bairro Butantã e tem 3 entradas principais, chamadas comumente de P1, P2 e P3:</p>
   <img src={mapausp1} className="img-fluid"/>
   <dl className="row">
    <dt className="col-sm-3">Portaria 1</dt>
    <dd className="col-sm-9">R. Alvarenga / Av. Afrânio Peixoto</dd>

    <dt className="col-sm-3">Portaria 2</dt>
    <dd className="col-sm-9">Av. Escola Politécnica</dd>

    <dt className="col-sm-3">Portaria 3</dt>
    <dd className="col-sm-9">Av. Corifeu de Azevedo Marques</dd>
   </dl>
  <p> Essas são entradas para carros e pedestres. Além delas, há diversas entradas exclusivas para pedestres como pode se ver no mapa.</p>

  </div>
) 

const Transporte = () => (
  <div>
    <h4>TRANSPORTE</h4>

    <p>A USP conta com duas principais linhas de ônibus chamadas de Circulares. Os circulares, como o nome sugere, circula a USP passando por seus principais pontos e pela Estação Butantã do Metrô.</p>
    <img src={circulares} className="img-fluid"/>
    <p>A USP também possui uma entrada prática para aqueles que usam a Linha 9 - Esmeralda da CPTM. A entrada apelidada de PTrem desemboca em um ponto de ônibus por onde os Circulares passam.</p>
		<p>O Ponto de Táxi se localiza ao lado da Praça dos Bancos na Av. Professor Lúcio Martins Rodrigues.</p>
		<p>Todos os alunos e funcionários da USP recebem um passe de Ônibus (BUSP) que torna gratuita a utilização dos Circulares.</p>

  </div>
)

const Alimentacao = () => (
  <div>
    <h4>ALIMENTACAO</h4>

    <p>Alunos e Funcionários da USP têm direito a três refeições por dia nos Bandejões. Bandejão é o nome dado aos Restaurantes da USP. Esses são restaurantes subsidiados onde os alunos podem almoçar ou jantar por apenas R$1,90 e tomar café da manhã por R$0,60.</p>
	  <p>O Bandejão oferece uma refeição balanceada e com opção vegetariana. São 4 restaurantes no total: Central, das Químicas, da Física e da Prefeitura (PUSP-C). Todos eles são acessados pelo Cartão USP, mas para ter saldo no cartão, deve ser colocado no caixa do COSEAS próximo ao Bandejão Central.</p>
	  <p>Os cardápios podem ser acessados pelo website do COSEAS-USP <a target="_blank" href="http://www.usp.br/coseas/COSEASHP/COSEAS2010_cardapio.html">aqui</a>.</p>
		<p>Além dos Restaurantes da USP (Bandejões), há uma grande quantidade de restaurantes independentes no Campus.</p>

  </div>
)

const Aplicativos = () => (
  <div>
    <h4>APLICATIVOS</h4>

    <p>Alguns apps já foram criados para guiar os alunos com alguns pontos, como rota de circulares, cardápio dos bandejões e até as filas do Bandejão</p>
    
    <h5>Aplicativos da Universidade</h5>
    <dl className="row">
      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=br.usp.cardapio_usp&hl=pt"><img src={cardapiosusp} className="img-fluid"/></a></dd>
      <dt className="col-xs-4 flex-xs-middle" > Cardapios USP</dt>
      
      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=br.usp.campus_usp&hl=pt"><img src={campususp} className="img-fluid"/></a></dd>
      <dt className="col-xs-4 flex-xs-middle"> Campus USP</dt>
      
      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=br.usp.jornal_da_usp&hl=pt"><img src={jornaldausp} className="img-fluid"/></a></dd>
      <dt className="col-xs-4 flex-xs-middle"> Jornal da USP</dt>
      
      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=br.usp.bibliotecas_usp&hl=pt"><img src={bibliotecasusp} className="img-fluid"/></a></dd>
      <dt className="col-xs-4 flex-xs-middle"> Bibliotecas USP</dt>
    </dl>

    <h5>Outros</h5>
    <dl className="row">
      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.iacovelli.usp&hl=pt"><img src={uspdouglas} className="img-fluid"/></a></dd>
      <dd className="col-xs-4 flex-xs-middle" > <b>USP</b> - Douglas Iacovelli</dd>

      <dd className="col-xs-2"><a target="_blank" href="https://play.google.com/store/apps/details?id=br.usp.ime.bandex&hl=pt"><img src={bandex} className="img-fluid"/></a></dd>
      <dd className="col-xs-4 flex-xs-middle" > <b>Bandex Agora</b> - Wagner Ferreira Alves</dd>
    </dl>


   </div>
)

const UniversityPage = (props) => (
  <div className="row pt-1">
    {/* MENU DA UNIVERSIDADE */}
    <div className="col-md-3">
      <h5><b>Páginas Principais</b></h5>
      <ul className="nav nav-stacked nav-pills">
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/universidade/campus">O Campus</Link>
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