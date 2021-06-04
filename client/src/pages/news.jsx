import './style/global.css'
import './style/news.css'

let html = (<>
    {/* Barra de navegação */}
    <div class="topnavbar">
        <a href="/">Página Inicial</a>
        <a class="active" href="#movest">Movimento Estudantil</a>
        <a href="#comp">Espaço da Computação</a>
        <a href="#contact">Deixe sua Sugestão</a>
        <a href="#about">Sobre nós</a>
    </div>


    {/* Pagina das notícias */}
    <section id="home">
        <div class="news_container">
            <div id="principal_news">
                <h1 class="news_title">Notícia Sobre movimento estudantil:</h1>
                <h4 class="news_subtitle">Publicada no dia 17/04/2020</h4>
            </div>
            <div id="last_news"></div>
        </div>
    </section>
</>);

export default function News() {
    return html;
}