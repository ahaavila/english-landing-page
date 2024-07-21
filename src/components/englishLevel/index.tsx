import { Card, CardContainer, Image, PBold, ListBold, Ul, LinkButton } from "./styles";

export function EnglishLevel() {
  return (
    <>
      <Card>
        <LinkButton href="https://english-next-level.vercel.app" target="_blank">
        <CardContainer>
          <PBold>CURSO DE INGLÊS PARA NÍVEL ZERO OU BÁSICO.</PBold>
          <Ul>
            <ListBold>videoaulas,</ListBold>
            <ListBold>material para download,</ListBold>
            <ListBold>exercícios, áudios e diálogos para praticar,</ListBold>
            <ListBold>suporte para tirar dúvidas.</ListBold>
          </Ul>
        </CardContainer>
        </LinkButton>
        <Image src="./image2.png" alt="Lorena One Sentence a Day" />
      </Card>
    </>
  )
}
