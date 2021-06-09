import './style/global.css'
import './style/home.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import EmailIcon from '@material-ui/icons/EmailRounded'
import { ReactComponent as TwitterIcon } from './assets/twitter.svg'
import { ReactComponent as InstagramIcon } from './assets/instagram.svg'
import { useHistory } from 'react-router-dom'

let today = new Date();
let date = ("0" + today.getDate()).slice(-2) + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

let root = document.documentElement;


// Muda as variaveis do CSS para a posição do mouse atual
let is_draging = false;
let circle_pos = { x: window.innerWidth * 0.1, y: window.innerHeight * 0.5 }
let delta_center = { x: 0, y: 0 }
document.body.addEventListener('mousedown', (e) => {
    delta_center = { x: e.clientX - circle_pos.x, y: e.clientY - circle_pos.y }
    if (Math.sqrt(Math.pow(delta_center.x, 2) + Math.pow(delta_center.y, 2)) <= 100) {
        is_draging = true;
    }
})
document.body.addEventListener('mouseup', () => { is_draging = false; })
root.addEventListener("mousemove", e => {
    if (is_draging) {
        root.style.setProperty('--mouse-x', e.clientX - delta_center.x + "px");
        root.style.setProperty('--mouse-y', e.clientY - delta_center.y + "px");
        circle_pos = { x: e.clientX - delta_center.x, y: e.clientY - delta_center.y }
    }
});

// Muda a opacidade da página home dependendo da posição do scroll
window.addEventListener('scroll', function (e) {
    let opacity = 100 * (1 - (1.5 * window.pageYOffset / root.clientHeight));

    let home = document.getElementById("h-home");
    let home_effects = document.getElementById("h-home-effects");
    if (home === null || home_effects === null) return;
    home.style.opacity = opacity + "%";
    home_effects.style.opacity = opacity + "%";
});

export default function Home() {
    const history = useHistory();
    const redirect = () => {
        history.push("/news");
    }

    let html = (<>
        {/* Seção que fica escondida atrás da mascara circular */}
        <section id="h-home-effects">
            <div className="h-center">
                <h1 className="unselectable">Jornal Pra Frente</h1>
                <h4 className="unselectable">nem para esquerda, nem para direita</h4>
            </div>
        </section>

        {/* Página inicial */}
        <section id="h-home">
            <span>{date}</span>
            <p>
                <a target="_blank" rel="noreferrer" href="http://twitter.com"><TwitterIcon /></a>
                <a target="_blank" rel="noreferrer" href="http://instagram.com"><InstagramIcon /></a>
                <a target="_blank" rel="noreferrer" href="mailto:webmaster@example.com"><EmailIcon/></a>
            </p>
            <div className="h-center">
                <h1 className="unselectable">Jornal Pra Frente</h1>
                <h4 className="unselectable">nem para esquerda, nem para direita</h4>
            </div>
            <a href="#h-news"><ExpandMoreIcon id="h-more" /></a>
        </section >

        {/* Pagina das notícias */}
        <section id="h-news">
            <div className="h-container">
                <div id="h-block-1"></div>
                <div id="h-block-2"></div>
                <div id="h-block-3"></div>
                <div id="h-block-4"></div>
                <div id="h-see-more" onClick={redirect}>
                    <h1>Ver Mais</h1>
                    <ArrowForwardIcon />
                </div>
            </div>
        </section>
    </>);

    return html;
}