import calaboke from '../../assets/calaboke.jpg';
import calabokeH from '../../assets/calabokeH.jpg';
import './Karaoke.css';

export function Karaoke() {
    return (
        <div className='karaokePage'>
            <div className='desktop-version-karaoke'>
                <div className='title'>
                    <h1>CALABOKÊ</h1>
                    <hr className='line' />
                </div>

                <div className='row'>
                    <div className='col1'>
                        <p>
                            O Karaokê do Calabouço é o lugar certo pra você fazer seu HAPPY HOUR depois
                            do trabalho e já começar a aquecer o corpo pro espírito do fim de semana ✨
                        </p>
                        <p>
                            Toda quinta-feira tem KARAOKÊ no Calaba e semana-sim-semana-não o Calabokê
                            chega com ENTRADA FREE até 21h e você ainda canta QUANTAS VEZES QUISER de graaaaaça.
                        </p>
                        <p>
                            Tem mais, ein? O Calabokê ainda conta com 2 HORAS DE HAPPY HOUR pra você tomar aquela cerveja
                            geladissima em dose dupla ou aquele drinkzinho de milhões com 50% de desconto.
                        </p>
                        <p>
                            Se quem canta os males espanta, então... <br />
                            <span style={{ fontFamily: 'Anton' }}>CANTA COMIGO?</span>
                        </p>
                        <button className='btnProgramacao' onClick={() => { window.open('https://www.sympla.com.br/produtor/calaboucorockbar'); } }>VER PROGRAMAÇÃO COMPLETA</button>
                    </div>
                    <div className='col2'>
                        <img src={calaboke} alt='calaboke' />
                    </div>
                </div>
            </div>
            <div className='mobile-version-karaoke'>
                    <div className='title'>
                        <h1>CALABOKÊ</h1>
                        <hr className='line' />
                    </div>
                    <div className='rowContent'>
                        <p>
                            O Karaokê do Calabouço é o lugar certo pra você fazer seu HAPPY HOUR depois
                            do trabalho e já começar a aquecer o corpo pro espírito do fim de semana ✨
                        </p>
                        <img src={calabokeH} alt='calaboke' />
                        <p>
                            Toda quinta-feira tem KARAOKÊ no Calaba e semana-sim-semana-não o Calabokê
                            chega com ENTRADA FREE até 21h e você ainda canta QUANTAS VEZES QUISER de graaaaaça.
                        </p>
                        <p>
                            Tem mais, ein? O Calabokê ainda conta com 2 HORAS DE HAPPY HOUR pra você tomar aquela cerveja
                            geladissima em dose dupla ou aquele drinkzinho de milhões com 50% de desconto.
                        </p>
                        <p>
                            Se quem canta os males espanta, então... <br />
                            <span style={{ fontFamily: 'Anton' }}>CANTA COMIGO?</span>
                        </p>
                        <button className='btnProgramacao' onClick={() => { window.open('https://www.sympla.com.br/produtor/calaboucorockbar'); } }>VER PROGRAMAÇÃO COMPLETA</button>
                    </div>
                </div>
            </div>
    );
}