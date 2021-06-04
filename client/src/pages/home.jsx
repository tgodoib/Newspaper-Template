import './style/global.css'
import './style/home.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom'

let today = new Date();
let date = ("0" + today.getDate()).slice(-2) + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();

let root = document.documentElement;


// Muda as variaveis do CSS para a posição do mouse atual
let is_draging = false;
let circle_pos = { x: window.innerWidth * 0.1, y: window.innerHeight * 0.5 }
document.body.addEventListener('mousedown', (e) => {
    console.log(Math.sqrt(Math.pow(e.clientX - circle_pos.x, 2) + Math.pow(e.clientY - circle_pos.y, 2)))
    if (Math.sqrt(Math.pow(e.clientX - circle_pos.x, 2) + Math.pow(e.clientY - circle_pos.y, 2)) <= 100) {
        is_draging = true;
    }
})
document.body.addEventListener('mouseup', () => { is_draging = false; })
root.addEventListener("mousemove", e => {
    if (is_draging) {
        circle_pos = { x: e.clientX, y: e.clientY }
        root.style.setProperty('--mouse-x', e.clientX + "px");
        root.style.setProperty('--mouse-y', e.clientY + "px");
    }
});

// Muda a opacidade da página home dependendo da posição do scroll
window.addEventListener('scroll', function (e) {
    let opacity = 100 * (1 - (1.5 * window.pageYOffset / root.clientHeight));

    document.getElementById("home").style.opacity = opacity + "%";
    document.getElementById("home-effects").style.opacity = opacity + "%";
});

let html = (<>
    {/* Seção que fica escondida atrás da mascara circular */}
    <section id="home-effects">
        <div className="center">
            <h1 className="title unselectable">Jornal Pra Frente</h1>
            <h4 className="subtitle unselectable">nem para esquerda, nem para direita</h4>
        </div>
    </section >

    {/* Página inicial */}
    <section id="home">
        <p id="date">{date}</p>
        <p id="icons"></p>
        <div className="center">
            <h1 className="title unselectable">Jornal Pra Frente</h1>
            <h4 className="subtitle unselectable">nem para esquerda, nem para direita</h4>
        </div>
        <Link to="/news"><ExpandMoreIcon href="news" id="more" /></Link>
    </section >

    {/* Pagina das notícias */}
    <section id="news">
        <div className="container">
            <div id="block-1"></div>
            <div id="block-2"></div>
            <div id="block-3"></div>
            <div id="block-4"></div>
            <div id="see-more"></div>
        </div>
    </section>
</>);

export default function Home() {
    return html;
}