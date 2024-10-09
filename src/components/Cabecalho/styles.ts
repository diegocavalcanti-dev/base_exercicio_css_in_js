import styled from 'styled-components'

export const EstiloHeader = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

export const TituloHeader = styled.h1`
  color: ${(props) => props.theme.corPrincipal};
`
