import Carroussel from "../components/Carroussel/Carroussel"
import CarrousselTD from "../components/CarrousselTopDez/CarrousselTD"

export default function Home() {
  return (
    <>
      <Carroussel
        titulo="Filmes em alta"
        url='https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&region=US'
      />
      <Carroussel
        titulo="Séries em alta"
        url='https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1'
      />
      <CarrousselTD
        titulo="Top 10 no Brasil"
        url='https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&region=BR'
      />
    </>
  )
}
