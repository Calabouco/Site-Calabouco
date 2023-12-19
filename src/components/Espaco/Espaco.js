import './Espaco.css';
import foto1 from '../../assets/photos/espaco/7V9A5332.jpg';
import foto2 from '../../assets/photos/espaco/7V9A6014.jpg';
import foto3 from '../../assets/photos/espaco/7V9A5912.jpg';

export function Espaco() {
    return (
        <div className='div-espaco'>
            <h1>NOSSO ESPAÇO</h1>
            <hr className='line'></hr>
            <div className='grid-fotos'>
                <div className='quadro'>
                    <img className='fotoEspaco' src={foto1} alt='calabouco'></img>
                </div>
                <div className='quadro'>
                    <img className='fotoEspaco' src={foto2} alt='calabouco'></img>
                </div>
                <div className='quadro'>
                    <img className='fotoEspaco' src={foto3} alt='calabouco'></img>
                </div>
            </div>
        </div>
    )
}