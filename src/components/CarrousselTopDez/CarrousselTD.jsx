import styled from "styled-components"
import { useState, useEffect } from "react"
import ItemCarroussel from "../ItemCarrousel"
import Skeleton from "../Skeleton"

export default function CarrousselTD({ url, titulo }) {
  const [filmes, setFilmes] = useState([])
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
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
        const filmesFiltrados = data.results.filter(
          (filme) => filme.poster_path !== null
        )
        setFilmes(filmesFiltrados.slice(0, 10))
        setCarregado(true)
      })
      .catch((error) => console.error("error:" + error))
  }, [url])

  return (
    <>
    { carregado ? (
    <Container>
      <Titulo>{titulo}</Titulo>
      <ContainerPosters>
        {carregado &&
          filmes.map((filme, index) => (       
              <ItemCarroussel
              margin={1}
                key={index}
                numb={index + 1}
                tituloFilme={filme.title || filme.name}
                src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                id={filme.id}
              />
          ))}
      </ContainerPosters>
    </Container>
    ) : (
      <Skeleton />
    )
    }
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: max-content;
`

const ContainerPosters = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  padding: 2rem;
  position: relative;
  padding: 5% 2%;

  &&::-webkit-scrollbar {
    height: 8px;
  }
  &&::-webkit-scrollbar-track {
    background-color: #555;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 5px;
  }
`

const Titulo = styled.h2`
  font-family: var(--Montserrat);
  font-size: 1%.5;
  color: #fff;
  margin: 1rem 0 0 1.5rem;
  width: fit-content;
`
