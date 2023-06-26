import styled from 'styled-components'
import Erro from '../../public/ErroDeRota.png'
import Arrow from '../../public/ArrowBack.png'
import breakpoints from '../utils/MediaQueries'

export default function RotaInvalida(){
    return(<Container>
        <ErrorMsg src={Erro}></ErrorMsg>
        </Container>)
}

const Container  =styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorMsg = styled.img`
height: 100%;
  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    height: 70%;
  }
`