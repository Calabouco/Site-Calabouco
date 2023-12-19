import './Contato.css';
import wpp from '../../assets/whatsapp.png';
import instaIcon from '../../assets/instagram.png';

export function Contato() {
    return (
        <div className='div-contato'>
            <h1>Rua Felipe Camarão, 130, Vila Isabel</h1>
            <p>Para reservas ou mais informações, só entrar em contato pelos icones ou email abaixo.
                <br/>calabouco@gmail.com
            </p>
            <div className='row-icons'>
                <a href='https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0'><img src={wpp}></img></a>
                <a href='https://www.instagram.com/calaboucobar/'><img src={instaIcon}></img></a>
            </div>
        </div>
    )
}