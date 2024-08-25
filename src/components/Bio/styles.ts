import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  color: ${(props) => props.theme.red};
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`

export const BioContent = styled.div`
  max-width: 50%;
  margin-inline: 6rem;

  p {
    font-weight: 700;
    font-size: 1.2rem;

    margin-bottom: 1.5rem;

    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 800px) {
    max-width: 100%;
    margin-inline: 2rem;
  }
`

export const Title = styled.h2`
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`

export const NameTitle = styled.h3`
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 0.875rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LinkButton = styled.a`
  width: 100%;
`

export const Button = styled.button`
  width: 80%;
  color: ${(props) => props.theme.red};
  font-weight: 700;
  font-size: 1.7rem;
  padding-block: 1rem;
  cursor: pointer;

  border: 0px;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.grey};

  margin-bottom: 1.5rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: lightgrey;
  }

  @media (max-width: 429px) {
    width: 100%;
  }
`

export const PhotoLorena = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;

    margin-bottom: 1rem;
  }
`

export const Image = styled.img`

  @media (max-width: 800px) {
    width: 50%;
  }
`

export const Footer = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  padding-block: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    color: ${(props) => props.theme.white};
  }

  span:first-child {
    font-family: "Satisfy", cursive;
    font-size: 2rem;

    @media (max-width: 800px) {
      font-size: 0.875rem;
    }
  }

  span:last-child {
    font-size: 1.2rem;

    @media (max-width: 800px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 429px) {
    padding: 1rem;
  }
`
