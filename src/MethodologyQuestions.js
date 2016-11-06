import React from 'react'

const StartView = ({ onStart }) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4>Perguntas de metodologia</h4>
        <p className="card-text">As perguntas a seguir tem como objetivo medir seu conhecimento de metodologia. Responda tudo certo para provar que você está bem informado.</p>
        <button onClick={onStart} className="btn btn-primary">Iniciar</button>
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
        <div className="card-block">
          {correct ? (
            <div>
              <p className="card-text">
                Parabéns! A resposta está correta.
            </p>
            </div>
          ) : (
              <div>
                <p className="card-text">Resposta incorreta.</p>
                <p className="card-text">{question.explanation}</p>
              </div>
            )}
          <button onClick={onNext(number)} className="btn btn-primary">Próximo</button>
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
        }
      ]
    }
    this.onStart = this.onStart.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.onNext = this.onNext.bind(this)
  }

  onStart(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({ started: true })
  }

  onAnswer(number, letter) {
    return () => {
      const questions = this.state.questions
      const newQuestions = { ...questions }
      newQuestions[number].answered = true
      console.log('The choice was ', letter)
      newQuestions[number].choice = letter
      this.setState({ questions: newQuestions })
    }
  }

  onNext(number) {
    return () => {
      const numberOfQuestions = this.state.questions.length
      if (number < numberOfQuestions - 1) {
        this.setState({ current: number + 1 })
      } else {
        this.setState({ done: true })
      }

    }
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
          <div>DONE</div>
        ) : null}
      </div>
    )
  }
}

export default MethodologyQuestions