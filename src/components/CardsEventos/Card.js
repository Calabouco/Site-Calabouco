import './Card.css';

export function Card() {
    const cards = [
        {
            titulo: 'CALABOKÊ',
            subtitle: 'KARAOKÊ DO CALABOUÇO',
            data: '01/02',
            link_sympla: 'https://www.sympla.com.br/evento/calaboke-karaoke-do-calaba/2320569'
        },
        {
            titulo: 'BANDA VOODUO + LOFI',
            subtitle: 'TRIBUTO WHITE STRIPES',
            data: '02/02',
            link_sympla: 'https://www.sympla.com.br/evento/banda-vooduo-lofi-tributo-white-stripes/2280161'
        },
        {
            titulo: 'U2 RIO TRIBUTE',
            subtitle: '',
            data: '03/02',
            link_sympla: 'https://www.sympla.com.br/evento/u2-rio-tribute/2274632'
        },
        {
            titulo: 'CRUSHOKÊ',
            subtitle: 'KARAOKÊ DE ROCK',
            data: '08/02',
            link_sympla: 'https://www.sympla.com.br/evento/crushoke-karaoke-de-rock/2320580'
        },
        {
            titulo: 'MAIS DO MESMO',
            subtitle: 'TRIBUTO LEGIÃO URBANA',
            data: '09/02',
            link_sympla: 'https://www.sympla.com.br/evento/mais-do-mesmo-tributo-legiao-urbana/2302758'
        },
        {
            titulo: 'CALABOKÊ',
            subtitle: 'KARAOKÊ DO CALABA',
            data: '15/02',
            link_sympla: 'https://www.sympla.com.br/evento/calaboke-karaoke-do-calaba/2320588'
        },
        {
            titulo: 'AEROSMITH',
            subtitle: 'PUMP',
            data: '16/02',
            link_sympla: 'https://www.sympla.com.br/evento/aerosmith-pump/2280047'
        },
        {
            titulo: 'PEARL JAM + ALICE IN CHAINS',
            subtitle: 'PURANO + OCCIPITAL',
            data: '24/02',
            link_sympla: 'https://www.sympla.com.br/evento/pearl-jam-purano-alice-in-chains-occipital/2302761'
        },
    ];

    return (
        cards.map((item) =>
            <div className='row-card'>
                <div className='col-data'>
                    <h1>{item.data}</h1>
                    <hr className='linhaVert'/>
                </div>
                <div className='col-text'>
                    <h2>{item.titulo}</h2>
                    <p>{item.subtitle}</p>
                </div>
                <div className='col-ingresso'>
                    <button className='btnIngresso' onClick={() => { window.open(item.link_sympla) }}>INGRESSO</button>
                </div>
            </div>
        )
    );
}