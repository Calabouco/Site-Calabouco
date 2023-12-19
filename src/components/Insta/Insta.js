import insta from '../../assets/insta.png';
import './Insta.css';

export function Insta() {
    return (
        <div className="div-insta">
            <div className="insta-fundo">
                <a href='https://www.instagram.com/calaboucobar/' target='_blank'><img src={insta} alt='instagram Calabouço Bar'></img></a>
            </div>
        </div>
    )
}