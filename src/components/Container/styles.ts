import styled from "styled-components";

export const Content = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    justify-content: space-around;

    margin-inline: 5rem;
    margin-block-end: 10rem;
  }
`

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Block = styled.div`
  background-color: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.red};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 3rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  text-align: center;
`
