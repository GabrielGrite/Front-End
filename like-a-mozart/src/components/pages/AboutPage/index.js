import "./style.css";
import image from "../../../images/undraw_off_road_re_leme.svg";
import Title from "../../ui/Title";
import PageContainer from "../../ui/PageContainer";

const AboutPage = () => {
  return (
    <PageContainer>
      <Title>About Us:</Title>
      <div className="about">
        <img src={image} />
        <div className="about_content">
          <p>
            Like a Mozart foi criado pensando na dificuldade de se comprar
            instrumentos musicais e equipamentos de estúdio e gravação de áudio
            profissionais no Brasil, pois além de preços exorbitantes, a
            variedade é um fator decisivo na hora de comprar instrumentos.
            Portanto contamos com uma equipe capacitada em identificar o melhor
            instrumento pelo melhor preço possível, contanto com uma equipe
            técnica responsável pela avaliação inicial do instrumento, apontando
            os defeitos para que nossos luthiers de plantão possa deixá-lo na
            melhor condição para que desde o estudante até o profissional possa
            tirar o melhor som do instrumento.
          </p>
          <p>
            Por conta de grandes parcerias firmadas diretamente com os grandes
            fabricantes de instrumentos nacionais, conseguimos proporcionar o
            melhor preço do mercado para garantir que a música esteja presente
            em todos os lares brasileiros.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
