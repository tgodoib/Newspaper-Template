import './style/global.css'
import './style/topic_news.css'
import FastForwardIcon from '@material-ui/icons/FastForward'


let html = (<> 
    <div className="news_container">
        {/* Barra de navegação */}
        <div className="topnavbar">
            <FastForwardIcon />
            <a href="/">Página Inicial</a>
            <a className="active" href="/movimento_estudantil">Movimento Estudantil</a>
            <a href="#comp">Espaço da Computação</a>
            <a href="#about">Sobre nós</a> 
        </div>

        
        {/* Pagina das notícias */}
        <div id="principal_news">
            <h1 className="news_title">Movimento estudantil</h1>
            <h4 className="news_subtitle">Descrição sobre movimento estudantil</h4>
        </div>
    </div>
</>);

export default function News() {
    return html;
}