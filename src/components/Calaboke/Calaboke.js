import fotoCalaboke from '../../assets/calaboke.jpg';
import './Calaboke.css';

function BtnMaisInfos() {
    return (
        <button className='btnInfos' onClick={() => { window.open('https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0') }}>MAIS INFORMAÇÕES</button>
    )

}
export function Calaboke() {
    return (
        <div className='div-calaboke'>
            <h1>CALABOKÊ</h1>
            <hr className='line'></hr>
            <div className='row'>
                <div className='col-img'>
                    <img className='img' src={fotoCalaboke} alt='foto 1'></img>
                </div>
                <div className='col-texto'>
                    <p>O recém-inaugurado Calabokê, o Karaokê do Calabouço, chegou para ficar!<br/>
                        E pra comemorar a chegada dele tem entrada FREE até 21h e a nossa Black Princess de BRINDE até 20h que já tá virando tradição aqui no Calaba em dias de cantoria.<br/>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhtQul6R1DUgWq1hveze0N4QwgWn61ULTTDby332p2OS00Cg/viewform"><span style={{ fontWeight: 'bold' }}>Acesse aqui</span></a> pra se cadastrar na Lista Amiga e ganhar sua long neck de brinde, e não vai perder a hora, né?
                        <br/><br/>Abertura da casa às 19h;
                        <br/>Happy Hour até 20h.
                        <br/><span style={{ fontWeight: 'bold' }}>Vem pro Calabokê!</span>
                    </p>
                    <BtnMaisInfos />
                </div>
            </div>
        </div>
    )
}