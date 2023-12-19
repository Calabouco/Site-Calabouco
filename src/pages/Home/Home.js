import { SlideShow } from '../../components/SlideShow/SlideShow';
import { Intro } from '../../components/Intro/Intro';
import { Espaco } from '../../components/Espaco/Espaco';
import { Cardapio } from '../../components/Cardapio/CardapioSection';
import { Eventos } from '../../components/Eventos/Eventos';
import { Calaboke } from '../../components/Calaboke/Calaboke';
import { Insta } from '../../components/Insta/Insta';
import { Contato } from '../../components/Contato/Contato';
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