import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #000;
    background-color: ${(props) => props.theme.white};
  }

  body, input-security, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`
