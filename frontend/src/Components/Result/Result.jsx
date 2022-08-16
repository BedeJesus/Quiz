import { Link, useLocation } from "react-router-dom";
import './result.css'

export default function Result() {

    const location = useLocation();

    let score = location.state.points.score

    function Message() {
        if (score <= 2) {
            return 'Vamos fingir que não aconteceu..'
        } else if (score <= 4) {
            return 'da pra melhorar isso aí!'
        } else if (score <= 6) {
            return 'ok ne ta na média'
        } else if (score <= 9) {
            return 'Mandou bem!'
        } else if (score === 10) {
            return 'Parabéns nerdão!'
        }
    }

    return (
        
        <div className="result">
            <h1>O seu resultado foi..</h1>

            <h1>{score} pontos!</h1>
            <h2>{Message()}</h2>

            <Link to ='/'>Voltar ao Menu</Link>

            
        </div>
    )
}