import { useEffect, useState } from "react";
import { HeaderComponent, Title, Image } from "./styles";
import { USER_AGENT, getUserAgentType } from "../../utils/agent";

export function Header() {
  const [viewport, setViewport] = useState('');

  useEffect(() => {
    setViewport(getUserAgentType());
  }, []);

  return (
    <HeaderComponent>
      {viewport === USER_AGENT.DESKTOP && <Image src="./lorena1.png" ></Image>}
      <Title>{viewport === USER_AGENT.DESKTOP ? 'Uma Guia no Caminho para a Fluência em Inglês!' : 'Lorena Brandão'}</Title>
      <p>{viewport === USER_AGENT.DESKTOP ? 'Lorena Brandão' : 'Vamos falar inglês!'}</p>
    </HeaderComponent>
  )
}
