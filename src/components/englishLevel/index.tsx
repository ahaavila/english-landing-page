import { openEnglishNextLevel } from "../../utils/sendFunctions";
import { Card, CardContainer, Image, PBold, ListBold, Ul } from "./styles";

export function EnglishLevel() {
  return (
    <>
      <Card onClick={() => openEnglishNextLevel()}>
        <CardContainer>
          <PBold>CURSO DE INGLÊS PARA NÍVEL ZERO OU BÁSICO.</PBold>
          <Ul>
            <ListBold>videoaulas,</ListBold>
            <ListBold>material para download,</ListBold>
            <ListBold>exercícios, áudios e diálogos para praticar,</ListBold>
            <ListBold>suporte para tirar dúvidas.</ListBold>
          </Ul>
        </CardContainer>
        <Image src="./image2.png" alt="Lorena One Sentence a Day" />
      </Card>
    </>
  )
}
