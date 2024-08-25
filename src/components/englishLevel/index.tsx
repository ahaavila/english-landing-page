import { Card, CardContainer, Image, PBold, ListBold, Ul, LinkButton, LogoImage } from "./styles";

export function EnglishLevel() {
  return (
    <>
      <Card>
        <LinkButton href="https://english-next-level.vercel.app" target="_blank">
        <CardContainer>
          <LogoImage src="./logo.png" alt="" />
          <PBold>INGLÊS PARA INICIANTES</PBold>
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
