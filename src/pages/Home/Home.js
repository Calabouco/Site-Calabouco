import { SlideShow } from '../../components/SlideShow/SlideShow.js';
import { Intro } from '../../components/Intro/Intro.js';
import { Espaco } from '../../components/Espaco/Espaco.js';
import { Cardapio } from '../../components/Cardapio/CardapioSection.js';
import { Eventos } from '../../components/Eventos/Eventos.js';
import { Calaboke } from '../../components/Calaboke/Calaboke.js';
import { Insta } from '../../components/Insta/Insta.js';
import { Contato } from '../../components/Contato/Contato.js';
import frenteCalaba from '../../assets/Frame 1.png';
import './Home.css';

export function Home() {
    return (
        <>
          <SlideShow />
          <Intro />
          <Espaco />
          <div className='div-frenteCalaba'>
            <img className='frenteCalaba' src={frenteCalaba} alt='Frente Calabouço'></img>
          </div>
          <Cardapio />
          <Eventos />
          <Calaboke />
          <Insta />
          <Contato />
        </>
    )
}