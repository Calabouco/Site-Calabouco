import './MenuMobile.css';

export function Menu({ setActualPage, setOpenMenu }) {
    return (
        <ul className="menu-list">
            <li><a href="https://www.menudigital.app.br/calaba/" target='_blank' rel="noreferrer"><p className="nav-cardapio">CARDÁPIO</p></a></li>
            <li><a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-eventos" >EVENTOS</p></a></li>
            <li><a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-reservas" >RESERVAS</p></a></li>
            <li>
                <p
                    className="nav-programacao"
                    onClick={() => {
                        setActualPage('programacao');
                        setOpenMenu(false);
                    }}>PROGRAMAÇÃO</p></li>
            <li><p className="nav-karaoke" onClick={() => { setActualPage('karaoke'); setOpenMenu(false); }}>CALABOKÊ</p></li>
        </ul>
    );
}