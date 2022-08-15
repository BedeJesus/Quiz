import React from "react"
import { Link } from 'react-router-dom'
import './home.css'
export default function Home() {
    return (
        <div className="home">

            <h1>Bem-vindo ao Quiz</h1>

            <div className="buttons">
                <Link to='/quiz'>Iniciar Quiz</Link>
                <Link to='/register'>Cadastrar Questão</Link>
            </div>



        </div>
    )
}