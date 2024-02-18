import { Card } from '../../components/CardsEventos/Card.js';
import './Programacao.css';

export function Programacao() {
    return (
        <div className='div_programacao'>
            <div className="prog-content">
                <div className='row_title'>
                    <h1>PROGRAMAÇÃO</h1>
                    <button className='btnProgCompleta' onClick={() => { window.open('https://www.sympla.com.br/produtor/calaboucorockbar') }}>VER PROGRAMAÇÃO COMPLETA</button>
                </div>
                <hr className='line'></hr>
                <Card />
            </div>
        </div>
    );
}