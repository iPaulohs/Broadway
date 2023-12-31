import { styled } from "styled-components"
import { Link } from "react-router-dom"
import breakpoints from "../utils/MediaQueries"

export default function ItemCarroussel({ src, tituloFilme, numb, margin, id }) {
  return (
    <ContainerLink to={`/movie/${id}`}>
      <Container>
        <Number>{numb}</Number>
        <ContainerExterno margin={margin}>
          <ContainerInterno>
            <Poster src={src} />
            <TituloFilme>{tituloFilme}</TituloFilme>
          </ContainerInterno>
        </ContainerExterno>
      </Container>
    </ContainerLink>
  )
}

const ContainerLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const Container = styled.div`
  display: flex;
  align-items: baseline;
`

const Number = styled.h1`
  font-size: 10rem;
  align-self: baseline;
  font-family: var(--Bebas);
  color: red;
  -webkit-text-stroke: 0.01px #fff;
  margin: 0 -3% 0 0;
  z-index: 1;
`

const ContainerExterno = styled.div`
  width: 10.625rem;
  height: 15.625rem;
  margin-right: ${(props) => props.margin + "rem"};
  flex: 0 0 auto;
  scroll-snap-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 2px red, 0 0 0 4px #860000, 0 0 0 6px #fff;
  border: 1px solid red;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 8.5rem;
    height: 13rem;
  }
`

const ContainerInterno = styled.div`
  position: relative;
  bottom: 0.01%;
  right: 0.01%;
  width: 99.5%;
  height: 99.5%;
  background-color: #000;
  border: 1px solid #fff;
`

const Poster = styled.img`
  width: 100%;
  height: 100%;
`

const TituloFilme = styled.p`
  text-align: center;
  margin: 10% 0;
  font-family: var(--Stat);
  width: 110%;
`
