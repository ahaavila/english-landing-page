import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  height: 11rem;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  border-radius: 1.5rem;
  cursor: pointer;

  display: flex;
  gap: 1rem;
  align-items: flex-end;

  margin: 0 auto;

  @media (min-width: 800px) {
    width: 25rem;
  }

  @media (max-width: 429px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    margin: 3rem auto;
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
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    gap: 0.25rem;
  }
`

export const PSmall = styled.p`
  font-size: 0.845rem;
`

export const PBold = styled.p`
  font-size: 0.845rem;
  font-weight: bold;
`

export const PExtraSmall = styled.p`
  font-size: 0.75rem;
`

export const ListBold = styled.li`
  font-weight: bold;
  font-size: 0.8rem;
`

export const Image = styled.img`
  height: 120%;
  transform: scaleX(-1);
`
