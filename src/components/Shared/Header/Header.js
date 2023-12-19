import './Header.css';
import logo from '../../../assets/logocalaba.png';

export function Header() {
    return (
        <header className="App-header">
            <p className="nav-cardapio" >CARDÁPIO</p>
            <p className="nav-eventos" >EVENTOS</p>
            <img className="logo" src={logo} alt="Logo Calabouço"></img>
            <p className="nav-reservas" >RESERVAS</p>
            <p className="nav-programacao" >PROGRAMAÇÃO</p>
        </header>
    )
}