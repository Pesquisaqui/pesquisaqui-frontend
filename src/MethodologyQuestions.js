import React from 'react'
import size from 'lodash/size'

const StartView = ({ onStart }) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4>Perguntas sobre plágio</h4>
        <p className="card-text">As perguntas a seguir tem como objetivo medir seu conhecimento de metodologia. Responda tudo certo para provar que você está bem informado.</p>
        <button onClick={onStart} className="btn btn-primary">Iniciar</button>
      </div>
    </div>
  )
}


const EndView = ({ questions, onRestart }) => {
  const points = questions.reduce((prev, cur) => {
    if (cur.choice === cur.answer) {
      return prev + 1
    }
    return prev
  }, 0)
  const length = size(questions)
  return (
    <div className="card">
      <div className="card-block">
        <h4>Fim</h4>
        <p className="card-text lead">Você acertou {points} de {length} perguntas.</p>
      </div>
      <div className="card-block">
        <button className="btn btn-default" onClick={onRestart}>Recomeçar</button>
      </div>
    </div>
  )
}


const QuestionView = ({ questions, number, onAnswer, onNext }) => {
  const question = questions[number]
  const correct = (question.choice !== null) && (question.choice === question.answer)
  let cardClass = 'card'
  if (question.choice === null) {
    cardClass = 'card'
  } else if (question.choice === question.answer) {
    cardClass = 'card card-inverse card-success'
  } else if (question.choice !== question.answer) {
    cardClass = 'card card-inverse card-danger'
  }
  console.log(question.choice, question.answer, cardClass)
  return (
    <div className={cardClass}>
      <div className="card-block">
        <h4 className="card-title">Pergunta {number + 1}</h4>
        <p className="card-text">{question.question}</p>
      </div>
      {question.answered ? (
        <div>
          <div className="card-block">
            {correct ? (
              <div>
                <p className="card-text lead">
                  Parabéns! A resposta está correta.
            </p>
              </div>
            ) : (
                <div>
                  <p className="card-text lead">Resposta incorreta. {question.explanation}</p>
                </div>
              )}
          </div>
          <div className="card-block">
            <button onClick={onNext} className="btn btn-primary">Próximo</button>
          </div>
        </div>
      ) : (
          <div>
            <div className="list-group list-group-flush">
              <button onClick={onAnswer(number, 'a')} type="button" className="list-group-item list-group-item-action">
                a) {question.options.a}
              </button>
              <button onClick={onAnswer(number, 'b')} type="button" className="list-group-item list-group-item-action">
                b) {question.options.b}
              </button>
              <button onClick={onAnswer(number, 'c')} type="button" className="list-group-item list-group-item-action">
                c) {question.options.c}
              </button>
              <button onClick={onAnswer(number, 'd')} type="button" className="list-group-item list-group-item-action">
                d) {question.options.d}
              </button>
            </div>
          </div>
        )}
        
    </div>
  )
}

class MethodologyQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
      done: false,
      current: 0,
      points: 0,
      questions: [
        {
          answered: false,
          choice: null,
          question: 'E possível cometer plágio com um material de autoria própria?',
          options: {
            a: 'Não, o que for produzido pelo autor, pode sempre ser utilizado por si mesmo, afinal os direitos autorais pertencem e ele próprio.',
            b: 'Depende. Caso a publicação tenha sido realizada a mais de 5 anos, a referencia será considerada "atualização", e não se aplicará o plágio.',
            c: 'Sim, Quando há utilização de material de autoria própria já publicado, sem citação de publicação anterior.',
            d: 'Apenas no caso de a publicação anterior ter sido realizada a menos de 3 anos, após o período, novo usos, citados ou não, são classificados como atualizações.',
          },
          answer: 'c',
          explanation: 'Matérias utilizados sem citação de fonte, independente da data de publicação, serão considerados plagio, mesmo que de autoria própria.'
        },
        {
          answered: false,
          choice: null,
          question: 'Nas referências bibliográficas, há regras específicas para sua exposição?',
          options: {
            a: 'Para as datas de referências bibliográficas, deve se utilizar a de publicação mais recente, em detrimento da publicação original.',
            b: 'Todas as referências sempre devem conter o nome direto do autor.',
            c: 'Em caso de múltiplos autores, é obrigatório a citação de todos.',
            d: 'As citações diretas a autores devem contar com nome, título, local, editor e ano.',
          },
          answer: 'd',
          explanation: 'As citações a autor seguem o modelo: Último nome, Primeiro nome. Título. Local: Editor, Ano.'
        },
        {
          answered: false,
          choice: null,
          question: 'No ramo da pesquisa documental, há padronização de modelos, ou conteúdos que não devam ser utilizados?',
          options: {
            a: 'Fontes classificadas como de "Segunda Mão", não são consideradas válidas para a pesquisa documental',
            b: 'Relatórios de pesquisa e pareceres oficiais assinados por perito registrado são consideradas fontes de segunda mão',
            c: 'Cartas, fotografias e gravuras são consideradas fontes de segunda mão, e portanto não devem se utilizadas como fontes confiáveis de dados para pesquisa documental',
            d: 'Dados obtidos em fontes de primeira mão sempre são priorizados frente a dados de segunda mão.',
          },
          answer: 'b',
          explanation: 'Relatórios e pareceres são resultado de uma análise de dados já existentes, não sendo em si conteúdo novo ou a analisar, portanto classificados como fontes de segunda mão. Entretanto, se mantém como fontes de dados possíveis de serem utilizadas para pesquisa, sem maiores prejuízos, desde que verificada sua autenticidade científica.'
        },
        {
          answered: false,
          choice: null,
          question: 'Seria considerado um erro o entrevistador abrir margem para o entrevistado divagar livremente sobre o tema em pesquisa?',
          options: {
            a: 'Sim, pois sem um alinhamento central dos dados propostos, a entrevista irá tangenciar a proposta de pesquisa e terá pouca relevância prática.',
            b: 'Será um erro, caso a pesquisa tenha objetivo quantitativo, e não qualitativo.',
            c: 'Não se caracteriza como um erro, pois o entrevistador deve sempre manter a pequisa com o entrevistado, mesmo que seja identificado que este não pertence a seu público alvo',
            d: 'Não se caracteriza como erro, principalmente em fases exploratórias, nas quais o dialogo aberto e mesmo informal pode levar ao aprofundamento no tema, ou mesmo revisão de hipóteses.',
          },
          answer: 'd',
          explanation: 'O diálogo aberto e informal pode ser um importante aliado ao pesquisador, levando a uma maior profundidade no entendimento do tema através de pessoas com maior vivência com o objeto de pesquisa, podendo levar inclusive a revisão de premissas básicas do estudo.'
        }
      ],
      initialQuestions: [
        {
          answered: false,
          choice: null,
          question: 'E possível cometer plágio com um material de autoria própria?',
          options: {
            a: 'Não, o que for produzido pelo autor, pode sempre ser utilizado por si mesmo, afinal os direitos autorais pertencem e ele próprio.',
            b: 'Depende. Caso a publicação tenha sido realizada a mais de 5 anos, a referencia será considerada "atualização", e não se aplicará o plágio.',
            c: 'Sim, Quando há utilização de material de autoria própria já publicado, sem citação de publicação anterior.',
            d: 'Apenas no caso de a publicação anterior ter sido realizada a menos de 3 anos, após o período, novo usos, citados ou não, são classificados como atualizações.',
          },
          answer: 'c',
          explanation: 'Matérias utilizados sem citação de fonte, independente da data de publicação, serão considerados plagio, mesmo que de autoria própria.'
        },
        {
          answered: false,
          choice: null,
          question: 'Nas referências bibliográficas, há regras específicas para sua exposição?',
          options: {
            a: 'Para as datas de referências bibliográficas, deve se utilizar a de publicação mais recente, em detrimento da publicação original.',
            b: 'Todas as referências sempre devem conter o nome direto do autor.',
            c: 'Em caso de múltiplos autores, é obrigatório a citação de todos.',
            d: 'As citações diretas a autores devem contar com nome, título, local, editor e ano.',
          },
          answer: 'd',
          explanation: 'As citações a autor seguem o modelo: Último nome, Primeiro nome. Título. Local: Editor, Ano.'
        },
        {
          answered: false,
          choice: null,
          question: 'No ramo da pesquisa documental, há padronização de modelos, ou conteúdos que não devam ser utilizados?',
          options: {
            a: 'Fontes classificadas como de "Segunda Mão", não são consideradas válidas para a pesquisa documental',
            b: 'Relatórios de pesquisa e pareceres oficiais assinados por perito registrado são consideradas fontes de segunda mão',
            c: 'Cartas, fotografias e gravuras são consideradas fontes de segunda mão, e portanto não devem se utilizadas como fontes confiáveis de dados para pesquisa documental',
            d: 'Dados obtidos em fontes de primeira mão sempre são priorizados frente a dados de segunda mão.',
          },
          answer: 'b',
          explanation: 'Relatórios e pareceres são resultado de uma análise de dados já existentes, não sendo em si conteúdo novo ou a analisar, portanto classificados como fontes de segunda mão. Entretanto, se mantém como fontes de dados possíveis de serem utilizadas para pesquisa, sem maiores prejuízos, desde que verificada sua autenticidade científica.'
        },
        {
          answered: false,
          choice: null,
          question: 'Seria considerado um erro o entrevistador abrir margem para o entrevistado divagar livremente sobre o tema em pesquisa?',
          options: {
            a: 'Sim, pois sem um alinhamento central dos dados propostos, a entrevista irá tangenciar a proposta de pesquisa e terá pouca relevância prática.',
            b: 'Será um erro, caso a pesquisa tenha objetivo quantitativo, e não qualitativo.',
            c: 'Não se caracteriza como um erro, pois o entrevistador deve sempre manter a pequisa com o entrevistado, mesmo que seja identificado que este não pertence a seu público alvo',
            d: 'Não se caracteriza como erro, principalmente em fases exploratórias, nas quais o dialogo aberto e mesmo informal pode levar ao aprofundamento no tema, ou mesmo revisão de hipóteses.',
          },
          answer: 'd',
          explanation: 'O diálogo aberto e informal pode ser um importante aliado ao pesquisador, levando a uma maior profundidade no entendimento do tema através de pessoas com maior vivência com o objeto de pesquisa, podendo levar inclusive a revisão de premissas básicas do estudo.'
        }
      ]
    }
    this.onStart = this.onStart.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.onNext = this.onNext.bind(this)
    this.onRestart = this.onRestart.bind(this)
  }

  onStart(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({ started: true })
  }

  onAnswer(number, letter) {
    return () => {
      const questions = this.state.questions
      const newQuestions = [ ...questions ]
      newQuestions[number].answered = true
      console.log('The choice was ', letter)
      newQuestions[number].choice = letter
      this.setState({ questions: newQuestions })
    }
  }

  onNext() {
    const current = this.state.current
    const questions = this.state.questions
    const numberOfQuestions = size(questions)
    console.log('current', current, 'total', questions)
    if (current < numberOfQuestions - 1) {
      this.setState({ current: current + 1 })
    } else {
      this.setState({ done: true })
    }
  }

  onRestart() {
    const questions = this.state.initialQuestions
    this.setState({ current: 0, points: 0, started: false, done: false, questions: questions })
  }

  render() {
    return (
      <div>
        {!this.state.started ? (
          <StartView onStart={this.onStart} />
        ) : null}
        {(this.state.started) && (!this.state.done) ? (
          <QuestionView
            questions={this.state.questions}
            number={this.state.current}
            onAnswer={this.onAnswer}
            onNext={this.onNext}
            />
        ) : null}
        {(this.state.done) ? (
          <EndView questions={this.state.questions} onRestart={this.onRestart} />
        ) : null}
      </div>
    )
  }
}

export default MethodologyQuestions