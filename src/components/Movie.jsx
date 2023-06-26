import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import breakpoints from "../utils/MediaQueries"
import { useMediaQuery } from "react-responsive"
import { Skeleton } from "@mui/material"

export default function MovieDetails() {
  const params = useParams()
  const { id } = params
  const [filme, setFilme] = useState({})
  const [generos, setGeneros] = useState([])
  const [classificacao, setClassificacao] = useState("")
  const [endereco, setEndereco] = useState(null)
  const [carregado, setCarregado] = useState(false)

  const isMobile = useMediaQuery({ query: "(max-width: 844px)" })

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTRmZTUzNjg2MzE1NzViZDc4NTZjMzU2YTcxZDI2NSIsInN1YiI6IjYzZWVhZTBjN2NmZmRhMDA4ZWMxNTYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp6musWyqQg0bV_1Od0gYxOnwpayjq3iaEbi2c-cgdU",
      },
    }

    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFilme(data)
        console.log(data)
      })
      .catch((error) => console.error("error:" + error))
  }, [])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTRmZTUzNjg2MzE1NzViZDc4NTZjMzU2YTcxZDI2NSIsInN1YiI6IjYzZWVhZTBjN2NmZmRhMDA4ZWMxNTYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp6musWyqQg0bV_1Od0gYxOnwpayjq3iaEbi2c-cgdU",
      },
    }

    const url = "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR"

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setGeneros(data.genres)
      })
      .catch((error) => console.error("error:" + error))
  }, [filme])

  const renderGenres = () => {
    if (filme && filme.genres && generos.length > 0) {
      const genreNames = filme.genres.map((genre) => {
        const matchingGenre = generos.find((g) => g.id === genre.id)
        return matchingGenre ? matchingGenre.name : ""
      })

      return genreNames.join(", ")
    }

    return ""
  }

  useEffect(() => {
    const fetchClassificacaoEtaria = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}/release_dates`
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTRmZTUzNjg2MzE1NzViZDc4NTZjMzU2YTcxZDI2NSIsInN1YiI6IjYzZWVhZTBjN2NmZmRhMDA4ZWMxNTYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp6musWyqQg0bV_1Od0gYxOnwpayjq3iaEbi2c-cgdU",
        },
      }

      try {
        const response = await fetch(url, options)
        const data = await response.json()
        const releaseDates = data.results.find(
          (result) => result.iso_3166_1 === "BR"
        )
        const classificacaoEtaria = releaseDates.release_dates[0].certification
        setClassificacao(classificacaoEtaria)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchClassificacaoEtaria()
  }, [])

  useEffect(() => {
    switch (classificacao) {
      case "L":
        setEndereco(
          <ClassificacaoEtaria src="/classificacao-etaria/Livre.png" />
        )
        break

      case "10":
        setEndereco(<ClassificacaoEtaria src="/classificacao-etaria/Dez.png" />)
        break

      case "12":
        setEndereco(
          <ClassificacaoEtaria src="/classificacao-etaria/Doze.png" />
        )
        break

      case "14":
        setEndereco(
          <ClassificacaoEtaria src="/classificacao-etaria/Quatorze.png" />
        )
        break

      case "16":
        setEndereco(
          <ClassificacaoEtaria src="/classificacao-etaria/Dezesseis.png" />
        )
        break

      case "18":
        setEndereco(
          <ClassificacaoEtaria src="/classificacao-etaria/Dezoito.png" />
        )
        break
    }

    

    const setCarregadoAfter = () => setTimeout(setCarregado(true), 2000)
    setCarregadoAfter()
  }, [classificacao])

  return (
    <>
    {
    carregado ?
    <>
      {!isMobile ? (
        <Container>
          <ContainerPoster
            backdropUrl={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}>
            <Poster
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            />
            <ContainerInfo>
              <Titulo>{filme.title}</Titulo>
              <Classificacao size="0.8">
                {filme.release_date} | 1h:32m | {renderGenres()}
              </Classificacao>
              {endereco}
              <TituloSinopse size={1.5} weight="800">
                Sinopse:
              </TituloSinopse>
              <Sinopse>{filme.overview}</Sinopse>
              <Button bgColor="#F00">Adicionar aos favoritos</Button>
              <Button bgColor="#080038">Assistir ao trailer</Button>
            </ContainerInfo>
          </ContainerPoster>
        </Container>
      ) : (
        <Container>
            <ContainerPoster backdropUrl={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}>
            <Poster src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
          </ContainerPoster>
          <ContainerInfo>
            <Titulo>{filme.title}</Titulo>
            <Classificacao size="0.8">
              {filme.release_date} | 1h:32m | {renderGenres()}
            </Classificacao>
            <ContainerClassificacao>{endereco}</ContainerClassificacao>
            <TituloSinopse size={1.5} weight="800">
              Sinopse:
            </TituloSinopse>
            <Sinopse>{filme.overview}</Sinopse>
            <Button bgColor="#F00">Adicionar aos favoritos</Button>
            <Button bgColor="#080038">Assistir ao trailer</Button>
          </ContainerInfo>
        </Container>
      )}
    </>
    :
    <Container>
      <SkeletonContainer />
    </Container>
      }
    </>
  )
}

const SkeletonContainer = styled(Skeleton).attrs((props) => ({
  sx: { bgcolor: "grey.900" },
  variant: "rectangular",
  height: "90vh",
  width: "80vw",
  ...props,
}))``;

const ClassificacaoEtaria = styled.img``

const ContainerClassificacao = styled.div`
width: 5rem;
height: 5rem;
margin: 0 0;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerInfo = styled.div`
  width: 50%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 100vw;
  }
`

const Titulo = styled.h1`
  font-family: var(--Montserrat);
  text-align: center;
  margin: 2rem 0 0 0;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    font-size: 1.5rem;
  }
`

const Classificacao = styled.h4`
  font-family: var(--Roboto);
  font-size: ${(props) => props.size + "rem"};
  font-weight: ${(props) => props.weight};
  margin: 0.5rem 0 0 0.8rem;
`

const TituloSinopse = styled.h4`
  font-family: var(--Roboto);
  font-size: ${(props) => props.size + "rem"};
  font-weight: ${(props) => props.weight};
  margin: 0rem 0 1rem 0;
`

const Sinopse = styled.p`
  text-align: center;
  width: 100%;
  font-family: var(--Roboto);
  font-weight: 600;
  margin: 0 0 1rem;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 90%;
  }
`

const ContainerPoster = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => `${props.backdropUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0px 10px 50px 0px #000 inset;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 90vw;
    height: 500px;
  }
`

const Poster = styled.img`
  height: 65%;
  margin-left: 15%;
  border-radius: 5px;
  box-shadow: 0 0 0 2px red, 0 0 0 4px #000, 0 0 0 6px #fff;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    margin: 0 auto;
  }
`

const Button = styled.button`
  width: 50%;
  height: 5%;
  padding: 3% 1%;
  margin: 1% 0;
  background-color: ${(props) => props.bgColor};
  font-family: var(--Bebas);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #fff;
  font-size: 1.5rem;
  position: relative;
  bottom: -8rem;

  @media (min-width: ${breakpoints.iPhones.minW}) and (max-width: ${breakpoints.iPhones.maxW}) {
    width: 80vw;
    height: 2.5rem;
    font-size: 1.75rem;
    bottom: 0.3rem;
  }

  @media (min-width: ${breakpoints.iPads.minW}) and (max-width: ${breakpoints.iPads.maxW}) {
    width: 65vw;
    height: 5vh;
    font-size: 2rem;
    bottom: 0;
  }
`
