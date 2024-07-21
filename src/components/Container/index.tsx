import { useEffect, useState } from "react";
import { OneSentenceADay } from "../OneSentenceADay";
import { ClassWithMe } from "../classWithMe";
import { EnglishLevel } from "../englishLevel";

import { Content, Separator, Block } from "./styles";
import { USER_AGENT, getUserAgentType } from "../../utils/agent";

export function Container() {
  const [viewport, setViewport] = useState('');

  useEffect(() => {
    setViewport(getUserAgentType());
  }, []);

  return (
    <Content>
      {
        viewport === USER_AGENT.DESKTOP ?
          <>
            <Separator>
              <Block>PROJETO</Block>
              <OneSentenceADay />
            </Separator><Separator>
              <Block>CURSO</Block>
              <EnglishLevel />
            </Separator><Separator>
              <Block>AULAS</Block>
              <ClassWithMe />
            </Separator>
          </> :
          <>
            <OneSentenceADay />
            <EnglishLevel />
            <ClassWithMe />
          </>
      }
    </Content>
  )
}
