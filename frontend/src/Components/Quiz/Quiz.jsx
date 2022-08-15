import { useEffect, useState } from 'react'
import './quiz.css'
import api from '../../utils/api'
import { Link } from 'react-router-dom'

export default function Quiz() {

    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState(0)


    useEffect(() => {
        api.get('/questions/ten').then((response) => {
            setQuestions(response.data.questions)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        


    }

    function Button(){
        

    }






    return (
        <>
            <Link to='/'>Voltar</Link>

            <div className="register">

                {questions.length > 0 &&
                    questions.map((question) => (




                        <form onSubmit={handleSubmit}>
                            <label>{question.title}</label>

                            <label>1- {question.first_answer}</label>

                            <label>2- {question.second_answer}</label>

                            <label>3- {question.third_answer}</label>

                            <label>4- {question.forth_answer}</label>

                            <label>Qual resposta é a correta?</label>

                            <div className='radio'>

                                <div className='option'>
                                    <input type="radio" name='correct_answer' value={1} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="option1">1</label>
                                </div>

                                <div className='option'>
                                    <input type="radio" name='correct_answer' value={2} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">2</label>
                                </div>

                                <div className='option'>
                                    <input type="radio" name='correct_answer' value={3} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">3</label>
                                </div >

                                <div className='option' >
                                    <input type="radio" name='correct_answer' value={4} onChange={(e) => setAnswer(e.target.value)} />
                                    <label for="age1">4</label>
                                </div>
                            </div>

                            <button onSubmit={Button()}>Cadastrar </button>
                        </form>

                    ))}
                {questions.length === 0 && (
                    <h3>Não há questões cadastradas</h3>

                )}

                
            </div>

            contador:{count}


        </>
    )
}















