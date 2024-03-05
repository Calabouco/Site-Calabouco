import './Header.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import close from '../../assets/marca-cruzada.png';

export function Header({ setActualPage, openMenuBar, setOpenMenuBar }) {

    return (
        <header className="App-header">
            <div className='col1'>
                <img className="logo" src={logo} alt="Logo Calabouço" onClick={() => setActualPage('home')}></img>
            </div>
            <div className='col2 desktop-version'>
                <a href="https://www.menudigital.app.br/calaba/" target='_blank' rel="noreferrer"><p className="nav-cardapio">CARDÁPIO</p></a>
                <a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-eventos" >EVENTOS</p></a>
                <a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-reservas" >RESERVAS</p></a>
                <p className="nav-programacao" onClick={() => setActualPage('programacao')}>PROGRAMAÇÃO</p>
                <p className="nav-karaoke" onClick={() => setActualPage('karaoke')}>CALABOKÊ</p>
            </div>

            <div className='col2 mobile-version'>
                { openMenuBar ?
                    <img src={close} alt='close menu' className='imageCloseMenu' onClick={() => setOpenMenuBar(!openMenuBar)}></img> 
                    : <img src={menu} alt='menu' className='imageMenu' onClick={() => setOpenMenuBar(!openMenuBar)}></img>
                }
            </div>
        </header>
    )
}