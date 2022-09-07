import "./style.css";
import secondaryBanner from "../../../images/secondary-banner-placeholder.jpg";
import undrawOffRoadReLeme from "../../../images/undraw_off_road_re_leme.svg";
import merchantImage from "../../../images/undraw_compose_music_re_wpiw.svg";
import Slideshow, { SlideBanner } from "../../ui/Slideshow";

const HomePage = () => (
  <div className="main">
    <div className="main__container">
      <div className="main__content">
        <Slideshow>
          <SlideBanner img={secondaryBanner} title="Destaques da semana"/>
          <SlideBanner img={secondaryBanner} title="Destaques da semana"/>
        </Slideshow>
        <br />
        <hr />
      </div>
      <div className="main__text">
        <img src={undrawOffRoadReLeme} height="250" width="250" />
        <div className="main__text__content">
          <h2>Like a Mozart:</h2>
          <hr />
          <p>
            Buscamos trazer as ferramentas necessarias para você compositor,
            criar desde a mais simples melodia ate a melhor sinfonia que ja
            ouvimos
          </p>
          <p>
            Nossos instrumentos são das mais diversas regioes,tipos e
            variedades.Tentando sempre chegar o mais proximo do instrumento do
            futuro musicista
          </p>
          <p>
            Trazemos produtos de qualidade por um preço mais em conta comparado
            aos concorrentes
          </p>
        </div>
      </div>
      <hr />
      <div className="merchant__image__container">
        <div className="merchant__content">
          <h2>Sua diversão é musica para nossos ouvidos.</h2>
          <hr />
          <p>
            O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu
            argumento. Ao clicar em Vídeo Online, você pode colar o código de
            inserção do vídeo que deseja adicionar.
          </p>
          <p>
            Você também pode digitar uma palavra-chave para pesquisar online o
            vídeo mais adequado ao seu documento. Para dar ao documento uma
            aparência profissional, o Word fornece designs de cabeçalho, rodapé,
            folha de rosto e caixa de texto que se complementam entre si.
          </p>
          <p>
            Por exemplo, você pode adicionar uma folha de rosto, um cabeçalho e
            uma barra lateral correspondentes. Clique em Inserir e escolha os
            elementos desejados
          </p>
        </div>
        <div className="merchant__image">
          <img
            src={merchantImage}
            alt="pic"
            id="main__image"
            className="main__image"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;