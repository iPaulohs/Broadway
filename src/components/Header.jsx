import styled from "styled-components"
import LogoMobile from "/logoMobile.png"
import LogoDesktop from "/logoDesktop.png"
import { List } from "@phosphor-icons/react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 844px)" })

  return (
    <Container>
      <LogoLinkContainer to="/">
        <Logo src={isMobile ? LogoMobile : LogoDesktop} />
      </LogoLinkContainer>
      {isMobile ? (
        <BurguerMenu size={32} color={"#FAFAFA"} />
      ) : (
        <ContainerList>
          <LinkListItem to="/search">
            <Li>Buscar</Li>
          </LinkListItem>
        </ContainerList>
      )}
    </Container>
  )
}

const Container = styled.header`
  width: 100vw;
  height: 10vh;
  background: rgba(8, 8, 8, 0.5);
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  box-sizing: border-box !important;
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

const ContainerList = styled.ul`
  display: flex;
  gap: 0 5%;
  position: relative;
  left: 78%;
`

const Li = styled.li`
  font-family: var(--Bebas);
`
const LinkListItem = styled(Link)`
  color: #fff;
  list-style: none;
  text-decoration: none;
  font-size: 1.5rem;
`

const BurguerMenu = styled(List)`
  display: inline;
  position: relative;
  left: 65%;
`
