import styled from "styled-components";

export const Card = styled.div`
  width: 85%;
  height: 10rem;
  background-color: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.darkBlue};
  border-radius: 1.5rem;
  cursor: pointer;

  display: flex;
  gap: 1rem;
  align-items: flex-end;

  margin: 3rem auto;

  @media (min-width: 800px) {
    margin: 0;
    width: 25rem;
  }

  @media (max-width: 429px) {
    width: 90%;
    gap: 0rem;
  }
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.darkBlue};

  @media (max-width: 429px) {
    width: 100%;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const PSmall = styled.p`
  font-size: 0.845rem;
`

export const PBold = styled.p`
  margin-left: 1rem;
  font-weight: bold;

  @media (max-width: 429px) {
    font-size: 0.875rem;
  }
`

export const PExtraSmall = styled.p`
  font-size: 0.75rem;
`

export const Ul = styled.ul`
  margin-left: 2rem;
`

export const ListBold = styled.li`
  font-weight: bold;
  font-size: 0.8rem;
`

export const Image = styled.img`
  height: 120%;
`
