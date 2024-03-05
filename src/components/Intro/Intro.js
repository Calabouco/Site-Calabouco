import './Intro.css';
import foto1 from'../../assets/photos/7V9A59121.jpg';
import foto2 from'../../assets/photos/7V9A6076.jpg';


export function Intro() {
    const titulos = [
        "Flexibilidade total para construir um momento inesquecível",
        "QUE TAL TRAZER SUA FESTA PRO ESPAÇO MAIS INCRÍVEL DA CIDADE?"
    ]

    const textos = [
        "Seja bem-vindo à sua segunda casa: o Calabouço Rock Bar! São 2 andares com mezanino, um palco espetacular, as melhores bandas e uma equipe afinada pra te proporcionar a melhor experiência em um ambiente único! ",
        "Corporativos, aniversários, bodas... não importa a festa, o importante é comemorar! Temos várias opções disponíveis para você, que podem incluir buffet, apresentações musicais e muito mais. Entre em contato e nos fale o que você quer e faremos o impossível para deixar a SUA festa do SEU jeito."
    ]

    const photos = [
        foto1,
        foto2
    ]
    return (
        <div className='div-intro'>
            <div className='desktop-intro'>
                <div className='row'>
                    <div className='col-img'>
                        <img className='img' src={photos[0]} alt='foto 1'></img>
                    </div>
                    <div className='col-texto'>
                        <h2>{ titulos[0].toUpperCase() }</h2>
                        <p>{ textos[0] }</p>
                    </div>
                </div>
                <div className='row'>
                <div className='col-texto2'>
                        <h2>{ titulos[1].toUpperCase() }</h2>
                        <p>{ textos[1] }</p>
                    </div>
                    <div className='col-img2'>
                    <img className='img' src={photos[1]} alt='foto 1'></img>
                    </div>
                </div>
            </div>

            {/* ----- mobile version ----- */}
            <div className='mobile-intro'>
                <div className='row-img'>
                    <img className='img' src={photos[0]} alt='foto 1'></img>
                </div>
                <div className='row-txt'>
                    <h2>{ titulos[0].toUpperCase() }</h2>
                    <p>{ textos[0] }</p>
                </div>
                <div className='row-img'>
                    <img className='img' src={photos[1]} alt='foto 1'></img>
                </div>
                <div className='row-txt'>
                    <h2>{ titulos[1].toUpperCase() }</h2>
                    <p>{ textos[1] }</p>
                </div>

            </div>
        </div>
    );
}