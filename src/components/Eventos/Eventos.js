import './Eventos.css';
import fotoAniversario from '../../assets/photos/eventos/aniversario.jpg';
import fotoHH from '../../assets/photos/eventos/happy hour.jpg';
import fotoEventoPrivado from '../../assets/photos/eventos/eventos privados.jpg';

function BtnReserva() {
    return (
        <button className='btnReserva' onClick={() => { window.open('https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0') }}>FAZER RESERVA</button>
    )

}

export function Eventos() {
    return (
        <div className='div-eventos'>
            <h1>VEM COMEMORAR AQUI!</h1>
            <hr className='line'></hr>
            <div className='row'>
                <div className='col-img'>
                    <img className='img' src={fotoAniversario} alt='foto 1'></img>
                </div>
                <div className='col-texto'>
                    <h2>ANIVERSÁRIOS</h2>
                    <p>ANIVERSARIANTES DA SEMANA NÃO PAGAM ENTRADA! \o/
                        E tem mais!
                        Levando 10 ou mais convidados você ganha alguns mimos.
                        Fale conosco para fazer sua reserva, conferir as regras e presentes
                    </p>
                    <BtnReserva />
                </div>
            </div>
            <div className='row'>
                <div className='col-texto2'>
                    <h2>HAPPY HOUR</h2>
                    <p>Nosso Happy Hour funciona durante uma hora após a abertura da casa.
                        Nele, você encontra as promoções como balde de long necks com 8 e pague 6, além de 50% de desconto em qualquer drink da casa.
                        *Verifique o horário de abertura do evento.
                    </p>
                </div>
                <div className='col-img2'>
                    <img className='img' src={fotoHH} alt='foto 1'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-img'>
                    <img className='img' src={fotoEventoPrivado} alt='foto 1'></img>
                </div>
                <div className='col-texto'>
                    <h2>EVENTOS PRIVADOS</h2>
                    <p>Corporativos, aniversários, bodas... não importa a festa, o importante é comemorar! 
                        Temos várias opções disponíveis para você, que podem incluir buffet, apresentações musicais e muito mais.
                        Entre em contato e nos fale o que você quer e faremos o impossível para deixar a SUA festa do SEU jeito.
                    </p>
                    <BtnReserva />
                </div>
            </div>
        </div>
    )
}