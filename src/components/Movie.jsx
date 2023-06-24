import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import YouTubeVideo from "./Trailer"
export default function MovieDetails() {
  const params = useParams()
  const { id } = params
  const [filme, setFilme] = useState({})
  const [generos, setGeneros] = useState([])
  const [videoId, setVideoId] = useState('')

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
    const url = `https://api.themoviedb.org/3/movie/${filme.id}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTRmZTUzNjg2MzE1NzViZDc4NTZjMzU2YTcxZDI2NSIsInN1YiI6IjYzZWVhZTBjN2NmZmRhMDA4ZWMxNTYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp6musWyqQg0bV_1Od0gYxOnwpayjq3iaEbi2c-cgdU",
      },
    };
  
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setVideoId(data.results[0].key)
          console.log(videoId)
        }
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  
  return (
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
          <TituloSinopse size={1.5} weight="800">
            Sinopse:
          </TituloSinopse>
          <Sinopse>{filme.overview}</Sinopse>
          <Button bgColor="#F00">Adicionar aos favoritos</Button>
          <Button bgColor="#080038">Assistir ao trailer</Button>
        </ContainerInfo>
      </ContainerPoster>
      <YouTubeVideo videoId={videoId.key} />
    </Container>
  )
}

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
`

const Titulo = styled.h1`
  font-family: var(--Montserrat);
  text-align: center;
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
  margin: 3rem 0 1rem 0;
`

const Sinopse = styled.p`
  text-align: center;
  width: 100%;
  font-family: var(--Roboto);
  font-weight: 600;
  margin: 0 0 1rem;
`

const ContainerPoster = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => `${props.backdropUrl}`});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0px 10px 50px 0px #000 inset;
`

const Poster = styled.img`
  height: 65%;
  margin-left: 15%;
  border-radius: 5px;
  box-shadow: 0 0 0 2px red, 0 0 0 4px #000, 0 0 0 6px #fff;
`

const Button = styled.button`
  width: 32%;
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
  font-size: 1.25rem;
`
