import { Card, CardContainer, Image, PBold, PSmall, PExtraSmall, ListBold, LinkButton } from "./styles";

export function OneSentenceADay() {
  return (
    <Card>
      <Image src="./image1.png" alt="Lorena One Sentence a Day" />
      <LinkButton href="https://one-sentence-a-day.vercel.app/" target="_blank">
        <CardContainer>
          <PSmall>Conheça meu projeto <strong>GRATUITO</strong></PSmall>
          <PBold>ONE SENTENCE A DAY!</PBold>
          <PExtraSmall>Uma frase em inglês</PExtraSmall>
          <PExtraSmall>todo dia, durante 60 dias!</PExtraSmall>
          <ul>
            <ListBold>material para download</ListBold>
            <ListBold>videoaula</ListBold>
          </ul>
        </CardContainer>
      </LinkButton>
    </Card>
  )
}
