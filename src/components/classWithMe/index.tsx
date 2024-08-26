import { Card, CardContainer, Image, PBold, ListBold, LinkButton } from "./styles";

const WHATSAPP_NUMBER = '+351912913967'
const WHATSAPP_MESSAGE = `Olá!%0A%0AObrigada pelo seu contato.%0A%0APosso não conseguir responder rapidamente, mas me diga um pouco sobre qual é a sua demanda. Se quiser pode enviar um áudio.%0A%0A☺️😉`

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
