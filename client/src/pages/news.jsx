import './style/global.css'
import './style/news.css'
import FastForwardIcon from '@material-ui/icons/FastForwardRounded'
import SearchIcon from '@material-ui/icons/SearchRounded'


let html = (<>
    <div id="n-container">
        {/* Barra de navegação */}
        <div id="n-topnavbar">
            <FastForwardIcon id="n-logo" />
            <a href="/">Página Inicial</a>
            <a href="/movimento_estudantil">Movimento Estudantil</a>
            <a href="#comp">Espaço da Computação</a>
            <a href="#about">Sobre nós</a>
            <input type="text" id="search-bar" placeholder="Pesquisa" />
            <SearchIcon id="n-search-icon" />
        </div>


        {/* Pagina das notícias */}
        <div id="n-main-news">
            <img src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/06/08/675x450/1_lorde_solarpower_cover_final-6698206.jpg" alt="Legenda da imagem" />
            <h1>Atenção: Lorde lança capa do novo álbum. #Jesusisback</h1>
            <h4>Não sei o que colocar nessa porra mas tem single da lorde em 2021, todo poder aos lgbtqia+</h4>
            <span>08/06/21 - Vivência na Computação</span>
            <p>
                Dando um show cu, a sumida aparece e anuncia não um album mas um single. E sem data confirmada, apenas afirmou que será lançado em 2021. Pelo menos foi a primeira de uma lista de artistas a quebrar a sindrome de Rihanna.
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, metus sit amet volutpat elementum, risus arcu porta ex, eu porta nulla quam tempor mauris. Proin facilisis, neque ut tempor sodales, mauris dui condimentum erat, interdum maximus augue tortor sit amet nibh. Donec pretium est pulvinar nunc suscipit, quis placerat risus auctor. Sed a nisl purus. Maecenas euismod, ex vitae laoreet porta, ipsum felis iaculis lorem, ac feugiat libero libero at metus. Donec ornare tellus vitae velit dapibus egestas. Phasellus convallis tellus sed dolor tempus vulputate. Duis placerat commodo erat vel vulputate.
            </p>
        </div>

        {/* Últimas Notícias */}
        <div id="n-lastnews">
            <h2>Útilmas Notícias</h2>
            <div className="n-lastnews-item">
                <div role="img" alt="" className="n-img" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/Lorde_-_Melodrama.png/220px-Lorde_-_Melodrama.png")' }}></div>
                <h3>Lorde não lança album a 4 anos e fans indagam se ela morreu </h3>
                <p>08/06/21 - Vivência na Computação</p>
            </div>
            <div className="n-lastnews-item">
                <div role="img" alt="" className="n-img" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/Lorde_-_Melodrama.png/220px-Lorde_-_Melodrama.png")' }}></div>
                <h3>Lorde não lança album a 4 anos e fans indagam se ela morreu </h3>
                <p>08/06/21 - Vivência na Computação</p>
            </div>
        </div>
    </div>
</>);

export default function News() {
    return html;
}