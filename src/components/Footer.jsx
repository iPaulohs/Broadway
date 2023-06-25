import styled from "styled-components"
import LogoRodape from "/BroadwayCompletoDesk.png"
import { Link } from "react-router-dom"
import breakpoints from "../utils/MediaQueries"

export default function Footer() {
  return (
    <ContainerFooter>
      <LogoLinkContainer to="/">
        <Logo src={LogoRodape} />
      </LogoLinkContainer>
    </ContainerFooter>
  )
}

const ContainerFooter = styled.footer`
  width: 100vw;
  height: 10vh;
  background: rgba(8, 8, 8, 0.5);
  display: flex;
  margin: 2% 0 0 0;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    margin: 15% 0 0 0;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    margin: 5% 0 0 0;
  }
`

const Logo = styled.img`
  height: 75%;
`

const LogoLinkContainer = styled(Link)`
  height: 100%;
  margin: 0 5%;
  display: flex;
  align-items: center;
`
