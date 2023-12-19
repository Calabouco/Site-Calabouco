import './CardapioSection.css';
import calabacon from '../../assets/photos/cardapio/calabacon.jpg';
import batata from '../../assets/photos/cardapio/batata calabouco.jpg';
import { useEffect, useState } from 'react';


export function Cardapio() {
    const titulos = [
        "Calabacon",
        "Batata Calabouço"
    ]

    const textos = [
        "BURGUER BOVINO COBERTO COM DUAS FATIAS DE AMERICAN CHEESE SCAR, CEBOLA CARAMELIZADA, UM TOQUE DE SHOYU, TIRAS DE BACON, PÃO PRETZEL SELADO NA MANTEIGA.",
        "BATATA RÚSTICA, FRITA, TEMPERADA NA PIMENTA CHILI, COBERTA COM CROCANTE DE MORTADELA, REGADA NO CREAM CHEESE, SERVIDA COM MOLHO JACK DANIEL'S BBQ."
    ]

    const photos = [
        calabacon,
        batata
    ]

    const [famosinhos, setFamosos] = useState([])

    useEffect(() => {
        const famoso = photos.map((item, i) => (
            {
                foto: item,
                nome: titulos[i],
                desc: textos[i]
            })
        )

        setFamosos(famoso);
    }, [])

    return (
        <div className='div-cardapio'>
            <h1>BEST SELLERS DO CARDÁPIO</h1>
            <hr className='line'></hr>
                {
                    famosinhos.map((famoso, i) => (
                        <>
                        <div className='row'>
                            <div className='col-texto'>
                                <h2>{ famoso.nome.toUpperCase() }</h2>
                                <p>{ famoso.desc.toUpperCase() }</p>
                                <button className='btnCardapio' onClick={() => { window.open('https://www.menudigital.app.br/calaba/#14611') }}>VER NO CARDAPIO</button>
                            </div>
                            <div className='col-img'>
                                <img className='img' src={famoso.foto} alt='foto 1'></img>
                            </div>
                        </div></>
                    ))
                }
            <button className='btnCardapioCompleto' onClick={() => { window.open('https://www.menudigital.app.br/calaba/') }}>VER CARDAPIO COMPLETO</button>
        </div>
    )
}