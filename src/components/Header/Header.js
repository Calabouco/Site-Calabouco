import './Header.css';
import logo from '../../assets/logocalaba.png';
import { useState } from 'react';

export function Header({ setActualPage }) {

    return (
        <header className="App-header">
            <a href="https://www.menudigital.app.br/calaba/" target='_blank' rel="noreferrer"><p className="nav-cardapio">CARDÁPIO</p></a>
            <a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-eventos" >EVENTOS</p></a>
            <img className="logo" src={logo} alt="Logo Calabouço" onClick={() => setActualPage('home')}></img>
            <a href="https://api.whatsapp.com/message/JABE4RPPPOKAD1?autoload=1&app_absent=0" target='_blank' rel="noreferrer"><p className="nav-reservas" >RESERVAS</p></a>
            <p className="nav-programacao" onClick={() => setActualPage('programacao')}>PROGRAMAÇÃO</p>
        </header>
    )
}