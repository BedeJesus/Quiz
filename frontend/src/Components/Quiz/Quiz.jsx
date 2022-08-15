import { useEffect, useState } from 'react'
import './quiz.css'
import api from '../../utils/api'
import { Link } from 'react-router-dom'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const [score,setScore] = useState(0)
    const [answer,setAnswer] = useState(0)


    useEffect(() => {
        api.get('/questions/ten').then((response) => {
            setQuestions(response.data.questions)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        CheckAnswer()
        setCount(count +1)
    }

    function CheckAnswer(){
        if(answer == questions[count].correct_answer){
            setScore(score +1)
        }
    }


    return (
        <>
            <Link to='/'>Voltar</Link>

            <div className="register">

                {questions.length > 0 &&

                        <form onSubmit={handleSubmit}>
                            <label>{questions[count].title}</label>

                            <label>1- {questions[count].first_answer}</label>

                            <label>2- {questions[count].second_answer}</label>

                            <label>3- {questions[count].third_answer}</label>

                            <label>4- {questions[count].forth_answer}</label>
                            <label>resp- {questions[count].correct_answer}</label>

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

                            <button type='submit'>Cadastrar </button>
                        </form>

                    }
                {questions.length === 0 && (
                    <h3>Não há questões cadastradas</h3>

                )}

                
            </div>
            <h1>Pergunta {count}</h1>
            <h1>Resultados corretos: {score}</h1>
            <h1>Resposta selecionada {answer}</h1>
                  
        </>
        
    )
}















