import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './register.css'
import api from '../../utils/api'


export default function Register() {

    const [question, setQuestion] = useState({})
    

    function handleOnChange(e) {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()
        registerQuestion(question)
        console.log(question)
    }



    //register question
    const navigate = useNavigate()
    const formData = new FormData()

    async function registerQuestion(question) {

        const data = await api.post('questions/create' ,question)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                return err.response.data
            })
    }


    return (
        <div className='all'>
            <Link to='/'>Voltar </Link>
            <div className="register">

                <h1>Faça o cadastro de uma pergunta</h1>

                <form onSubmit={handleSubmit}>
                    <label>Questão:</label>
                    <input type="text" placeholder="Digite sua questão" name ='title' onChange={handleOnChange} />

                    <label>Primeira resposta:</label>
                    <input type="text" placeholder="Digite a primeira resposta" name ='first_answer' onChange={handleOnChange} />

                    <label>Segunda resposta:</label>
                    <input type="text" placeholder="Digite a segunda resposta" name ='second_answer' onChange={handleOnChange} />

                    <label>Terceira resposta:</label>
                    <input type="text" placeholder="Digite a terceira resposta" name ='third_answer' onChange={handleOnChange} />

                    <label>Quarta resposta:</label>
                    <input type="text" placeholder="Digite a quarta resposta" name ='forth_answer' onChange={handleOnChange} />

                    <label>Qual é a resposta correta?</label>

                    <div className='radio'>

                        <div className='option'>
                            <input type="radio" name='correct_answer' value={1} onChange={handleOnChange} />
                            <label for="option1">1</label>
                        </div>

                        <div className='option'>
                            <input type="radio" name='correct_answer' value={2} onChange={handleOnChange} />
                            <label for="age1">2</label>
                        </div>

                        <div className='option'>
                            <input type="radio" name='correct_answer' value={3} onChange={handleOnChange} />
                            <label for="age1">3</label>
                        </div >

                        <div className='option' >
                            <input type="radio" name='correct_answer' value={4} onChange={handleOnChange} />
                            <label for="age1">4</label>
                        </div>
                    </div>

                    <button type="submit">Cadastrar </button>
                </form>
            </div>

        </div>
    )
}














