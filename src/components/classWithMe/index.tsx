import { Card, CardContainer, Image, PBold, ListBold, LinkButton } from "./styles";

const WHATSAPP_NUMBER = '+351921151527'
const WHATSAPP_MESSAGE = 'Olá, gostaria de saber mais sobre as aulas avançadas de inglês.'

export function ClassWithMe() {

  return (
    <Card>
      <Image src="./image3.jpeg" alt="Lorena One Sentence a Day" />
      <LinkButton href={`https://api.whatsapp.com/send?text=${WHATSAPP_MESSAGE}&phone=${WHATSAPP_NUMBER}`} target="_blank">
        <CardContainer>
          <PBold>AULA COMIGO!</PBold>
          <ul>
            <ListBold>para todos os níveis,</ListBold>
            <ListBold>aulas de conversação,</ListBold>
            <ListBold>planejamento de estudos.</ListBold>
          </ul>
        </CardContainer>
      </LinkButton>
    </Card>
  )
}
