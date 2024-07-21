import { openEnglishNextLevel } from "../../utils/sendFunctions";
import { BioContent, Content, Title, NameTitle, Button, ButtonContainer, Footer, PhotoLorena, Image } from "./styles";

export function Bio() {

  return (
    <>
      <Content>
        <BioContent>
          <Title>CONHEÇA SUA PROFESSORA DE INGLÊS</Title>
          <NameTitle>LORENA BRANDÃO</NameTitle>
          <p>
            🌟 Com mais de duas décadas de experiência apaixonada no ensino de inglês, Lorena acredita firmemente que aprender inglês é uma jornada
            emocionante, repleta de descobertas e surpresas a cada passo do caminho e mais importante acessível para pessoas de todas as idades.
          </p>
          <p>
            💡 Com uma abordagem dinâmica e interativa, ela transforma a sala de aula em um ambiente acolhedor e motivador, onde a aprendizagem se
            torna uma experiência envolvente e cativante. Ela inspira seus alunos a mergulharem de cabeça no inglês, encorajando-os a se expressarem
            livremente e a explorarem novas possibilidades de comunicação.
          </p>
          <p>
            🎉 Junte-se à Lorena em uma jornada rumo à fluência em inglês - uma jornada repleta de aprendizado, crescimento pessoal e, acima de tudo,
            diversão! Com ela como sua guia dedicada, você descobrirá que dominar o inglês não é apenas possível, mas também uma experiência
            verdadeiramente enriquecedora e transformadora.
          </p>
          <ButtonContainer>
            <Button onClick={() => openEnglishNextLevel()}>QUERO ME JUNTAR À LORENA!</Button>
          </ButtonContainer>
        </BioContent>
        <PhotoLorena>
          <Image src="./lorena1.png" alt="Teacher Lorena Bio" />
        </PhotoLorena>
      </Content>
      <Footer>
        <span>Lorena Brandão</span>
        <span>Uma Guia no Caminho para a Fluência em Inglês!</span>
      </Footer>
    </>
  )
}
