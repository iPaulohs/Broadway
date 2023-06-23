import styled from "styled-components"
import LogoRodape from "/BroadwayCompletoDesk.png"
import { Link } from "react-router-dom"

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
  margin: 1% 0 0 0;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  
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
