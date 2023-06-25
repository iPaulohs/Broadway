/* eslint-disable no-mixed-spaces-and-tabs */
import styled from "styled-components"
import LogoDesktop from "/Broadway3.png"
import { useState, useEffect } from "react"
import ItemCarroussel from "../components/ItemCarrousel"
import breakpoints from "../utils/MediaQueries"

export default function Busca() {
  const [searchText, setSearchText] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=pt-BR&page=1`
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTRmZTUzNjg2MzE1NzViZDc4NTZjMzU2YTcxZDI2NSIsInN1YiI6IjYzZWVhZTBjN2NmZmRhMDA4ZWMxNTYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp6musWyqQg0bV_1Od0gYxOnwpayjq3iaEbi2c-cgdU",
      },
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const resultadosFiltrados = data.results.filter(
          (filme) => filme.poster_path !== null
        )
        setResults(resultadosFiltrados)
      })
      .then(console.log(results))
      .catch((error) => console.error("error:" + error))
  }, [searchText])

  return (
    <Container>
      <DivInput>
        <Titulo>Busque por um título</Titulo>
        <Input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </DivInput>
      {searchText == "" ? (
        <DivLogo>
          <LogoG src={LogoDesktop} />
        </DivLogo>
      ) : (
        <DivResults>
          {results.map((filme) => (
            <ItemCarroussel
              key={filme.id}
              tituloFilme={filme.title || filme.name}
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
              id={filme.id}
            />
          ))}
        </DivResults>
      )}
    </Container>
  )
}

const Container = styled.div`
min-height: 75vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Titulo = styled.h2`
  font-family: var(--Montserrat);
  font-size: 3rem;
  color: #fff;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    font-size: 3rem;
  }
`

const DivInput = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0 5rem 0;
`

const DivLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
`

const DivResults = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4.5rem 1rem;
  position: relative;
  left: 70px;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
  grid-template-columns: repeat(2, 1fr);
    left: 25px;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const LogoG = styled.img`
  margin: auto auto;
  width: 50%;
  filter: grayscale(1);

  
  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 130%;
    position: relative;
    right: 15px;
    top: 20px;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    width: 110%;
  }
  
`

const Input = styled.input`
  width: 30vw;
  height: 5vh;
  border-radius: 5px;
  background-color: #000;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #860000, 0 0 0 6px red;
  padding: 0.2rem 1rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: var(--Stat);
  text-transform: uppercase;
  text-align: center;
  margin: 1rem 0 0 0;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 75vw;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    width: 60vw;
  }
`
