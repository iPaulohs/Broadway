/* eslint-disable no-mixed-spaces-and-tabs */
import styled from "styled-components"
import LogoDesktop from "/Broadway3.png"
import { useState, useEffect } from "react"
import ItemCarroussel from "../components/ItemCarrousel"

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
    <>
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
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
            />
          ))}
        </DivResults>
      )}
    </>
  )
}

const Titulo = styled.h2`
  font-family: var(--Montserrat);
  font-size: 2rem;
  color: #fff;
  margin: 1rem 0;
`

const DivInput = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
  padding: 2rem;
`

const LogoG = styled.img`
  margin: auto auto;
  width: 30%;
  filter: grayscale(1);
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
`
