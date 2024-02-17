import foto1 from '../../assets/photos/espaco/7V9A5332.jpg';
import foto2 from '../../assets/photos/espaco/7V9A6014.jpg';
import foto3 from '../../assets/photos/espaco/7V9A5912.jpg';

import './Espaco.css';

export function Espaco() {
    const img = [
        { id: 'foto-1', img: foto1 },
        { id: 'foto-2', img: foto2 },
        { id: 'foto-3', img: foto3 },
    ];

    return (
        <div className='div-espaco'>
            <h1>NOSSO ESPAÇO</h1>

            <hr className='line' />

            <div className='grid-fotos'>
                {
                    img?.map((item) => (
                        <div key={item.id} className='quadro'>
                            <img src={item.img} className='fotoEspaco' alt='calabouco' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}