import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 6rem;
  width: 100%;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.blue};
  margin-block: 2rem 5rem;
  color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 800px) {
    border-radius: 0.5rem;
    margin-block: 5rem;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  p {
    @media (min-width: 800px) {
      margin-top: 3rem;
      font-family: "Satisfy", cursive;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 429px) {
    margin-block: 2rem 3em;
  }
`

export const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;

  @media (min-width: 800px) {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`

export const Image = styled.img`
  @media (min-width: 800px) {
    height: 175%;
    margin-top: -4.5rem;
  }
`;
