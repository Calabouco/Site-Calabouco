import './Card.css';

export function Card() {
    const cards = [
        {
            titulo: 'BAD MEDICINE',
            subtitle: 'TRIBUTO BON JOVI',
            data: '24/11',
            link_sympla: 'www.google.com'
        },
        {
            titulo: 'BAD MEDICINE',
            subtitle: 'TRIBUTO BON JOVI',
            data: '24/11',
            link_sympla: 'www.google.com'
        },
        {
            titulo: 'BAD MEDICINE',
            subtitle: 'TRIBUTO BON JOVI',
            data: '24/11',
            link_sympla: 'www.google.com'
        }
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