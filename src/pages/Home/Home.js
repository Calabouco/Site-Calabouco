import { Intro } from '../../components/Intro/Intro.js';
import { Espaco } from '../../components/Espaco/Espaco.js';
import { Cardapio } from '../../components/Cardapio/CardapioSection.js';
import { Eventos } from '../../components/Eventos/Eventos.js';
import { Contato } from '../../components/Contato/Contato.js';
import frenteCalaba from '../../assets/Frame 1.png';
import './Home.css';

export function Home() {
    return (
        <>
          <Intro />
          <Espaco />
          <div className='div-frenteCalaba'>
            <img className='frenteCalaba' src={frenteCalaba} alt='Frente Calabouço'></img>
          </div>
          <Cardapio />
          <Eventos />
          <Contato />
          <button className='btnCadastro' onClick={() => { window.open('https://docs.google.com/forms/d/1CFJyhJo6DvNYJ9NYwxKYgkBJBts3t1ImcqubBgvD-K4/prefill') }} >CADASTRE-SE</button>
        </>
    )
}