import { VagaContainer, VagaTitulo, VagaLink, List, ListaItem } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <List>
      <ListaItem>Localização: {props.localizacao}</ListaItem>
      <ListaItem>Senioridade: {props.nivel}</ListaItem>
      <ListaItem>Tipo de contratação: {props.modalidade}</ListaItem>
      <ListaItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ListaItem>
      <ListaItem>Requisitos: {props.requisitos.join(', ')}</ListaItem>
    </List>
    <VagaLink href="https://linkedin.com">
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaContainer>
)

export default Vaga
