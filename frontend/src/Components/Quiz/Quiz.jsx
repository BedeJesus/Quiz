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

    function CheckAnswer() {
        if (answer == questions[count].correct_answer) {
            setScore(state => state + 1)
            console.log(score)


        } else {
            console.log('resposta errada')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        CheckAnswer()

        if (count < 9) {
            setCount(state => state + 1)
        } else {
            setCount(state => state + 1)
            console.log('tem q dar 10 ', score)

            // navigate('/quiz/result',
            //     {
            //         state: {
            //             points: { score }
            //         }
            //     })

        }

    }


    return (
        <div className='quiz'>
            <Link to='/'>Voltar</Link>

            <div className="question">

                {questions.length === 10 && count <=9  &&
                    

                    <>

                        <h1>Responda ao quiz</h1>
                        <form onSubmit={handleSubmit}>
                            <h2>Pergunta {count + 1}</h2>
                            <h2>{count}</h2>
                            <label>{questions[count].title}</label>

                            <label>1- {questions[count].first_answer}</label>

                            <label>2- {questions[count].second_answer}</label>

                            <label>3- {questions[count].third_answer}</label>

                            <label>4- {questions[count].forth_answer}</label>

                            <label>rest- {questions[count].correct_answer}</label>

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




                {questions.length === 0 && (
                    <h3>Não há 10 questões cadastradas</h3>

                )}

                { count === 10 &&(
                     <h3>Parabéns! sua pontuação é {score}</h3>

                )

                }
                <h1>pontos:{score}</h1>
            </div>
        </div>

    )
}















