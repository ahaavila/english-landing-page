import styled from "styled-components";

export const Card = styled.div`
  min-width: 350px;
  height: 11rem;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border-radius: 1.5rem;
  cursor: pointer;

  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 429px) {
    width: 90%;
    gap: 1rem;
  }

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.white};

  @media (max-width: 429px) {
    width: 100%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`

export const PBold = styled.p`
  font-weight: bold;
  font-size: 1rem;
`

export const ListBold = styled.li`
  font-size: 0.9rem;
  font-weight: bold;
`

export const Image = styled.img`
  height: 100%;
  transform: scaleX(-1);
  border-radius: 1rem;
`
