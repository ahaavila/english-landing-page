import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/header'
import { Container } from './components/Container'
import { Bio } from './components/Bio'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container />
      <Bio />
      <GlobalStyle />
    </ThemeProvider>
  )
}
