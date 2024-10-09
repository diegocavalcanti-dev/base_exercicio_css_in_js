import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import themeOrigin from './containers/theme/origin'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <EstiloGlobal /> {/* Adicionando os estilos globais */}
      <Header />
      <Hero />
      <Container>
        {' '}
        {/* Usando o Container estilizado */}
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
