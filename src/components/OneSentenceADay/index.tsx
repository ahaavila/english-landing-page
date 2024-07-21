import { openOneSentenceADay } from "../../utils/sendFunctions";
import { Card, CardContainer, Image, PBold, PSmall, PExtraSmall, ListBold } from "./styles";

export function OneSentenceADay() {
  return (
    <Card onClick={() => openOneSentenceADay()}>
      <Image src="./image1.png" alt="Lorena One Sentence a Day" />
      <CardContainer>
        <PSmall>Conheça meu projeto gratuito</PSmall>
        <PBold>ONE SENTENCE A DAY!</PBold>
        <PExtraSmall>Uma frase em inglês</PExtraSmall>
        <PExtraSmall>todo dia, durante 60 dias!</PExtraSmall>
        <ul>
          <ListBold>material para download</ListBold>
          <ListBold>videoaula</ListBold>
        </ul>
      </CardContainer>
    </Card>
  )
}
