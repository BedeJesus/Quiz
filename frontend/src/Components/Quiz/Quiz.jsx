import { useEffect, useState } from 'react'
import './quiz.css'
import api from '../../utils/api'
import { Link, useNavigate } from 'react-router-dom'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        api.get('/questions/ten').then((response) => {
            setQuestions(response.data.questions)
        })
    }, [])



    function handleSubmit(e) {
        e.preventDefault()

        if (answer == questions[count].correct_answer) {
            setScore(state => state + 1)
        }

        setCount(state => state + 1)
    }


    function Message() {
        if (score <= 2) {
            return 'Vamos fingir que não aconteceu...'
        } else if (score <= 4) {
            return 'Da pra melhorar isso aí!'
        } else if (score <= 6) {
            return 'Ok né ta na média'
        } else if (score <= 8) {
            return 'Mandou bem!'
        } else if (score > 8) {
            return 'Parabéns nerdão!'
        }
    }


    return (
        <div className='quiz'>
            <Link to='/'>Voltar</Link>

            <div className="question">

                {questions.length === 10 && count <= 9 &&

                    <>

                        <h1>Responda ao quiz</h1>
                        <form onSubmit={handleSubmit}>
                            <h2>Pergunta {count + 1}</h2>
                            <label>{questions[count].title}</label>

                            <label>1- {questions[count].first_answer}</label>

                            <label>2- {questions[count].second_answer}</label>

                            <label>3- {questions[count].third_answer}</label>

                            <label>4- {questions[count].forth_answer}</label>

                            <label>Qual resposta é a correta?</label>

                            <div className='radio'>

                                <div className='option'>
                                    <input type="radio" name='options' value={1} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="option1">1</label>
                                </div>

                                <div className='option'>
                                    <input type="radio" name='options' value={2} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">2</label>
                                </div>

                                <div className='option'>
                                    <input type="radio" name='options' value={3} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">3</label>
                                </div >

                                <div className='option' >
                                    <input type="radio" name='options' value={4} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">4</label>
                                </div>
                            </div>

                            <button type='submit'>Responder </button>
                        </form>
                    </>

                }

                {questions.length <10 && (
                    <div className='no_questions'>
                        <h1>Não há questões cadastradas!</h1>
                        <h2>Cadastre pelo menos 10 questões para fazer o quiz</h2>
                    </div>

                )}

                {count === 10 && (
                    <div className="result">
                        <h1>O seu resultado foi..</h1>

                        <h1>{score} pontos!</h1>
                        <h2>{Message()}</h2>

                        <Link to='/'>Voltar ao Menu</Link>
                    </div>
                )

                }

            </div>
        </div>

    )
}


