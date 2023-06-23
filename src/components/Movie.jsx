import styled from "styled-components";

export default function MovieDetails() {
  return (
    <Container>
      <ContainerPoster>
        <Poster src="https://image.tmdb.org/t/p/original//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" />
        <ContainerInfo>
          <Titulo>Super Mario Bros: O Filme</Titulo>
          <Classificacao size="0.8">
            05/04/2023 (BR) | 1h:32m | Animação, Família, Aventura, Fantasia
          </Classificacao>
          <TituloSinopse weight="800">Sinopse:</TituloSinopse>
          <Sinopse>
            Os irmãos Mario e Luigi, de ascendência italiana, vivem em Brooklyn
            (Nova Iorque), onde trabalham como canalizadores. Certo dia, durante
            um serviço de reparação de uma conduta de água, são sugados por um
            tubo e transportados para o Reino Cogumelo, um universo paralelo
            governado pela Princesa Peach. Sem saber do paradeiro do irmão,
            Mario vai ter de aprender a sobreviver naquele lugar, adquirindo
            capacidades bizarras mas que serão grandes mais-valias para destruir
            os planos de Bowser, um verdadeiro vilão que tenciona dominar o
            mundo."
          </Sinopse>
          <Button bgColor="#F00">Adicionar aos favoritos</Button>
          <Button bgColor="#080038">Assistir ao trailer</Button>
        </ContainerInfo>
      </ContainerPoster>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerInfo = styled.div`
  width: 50%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  font-family: var(--Montserrat);
`;

const Classificacao = styled.h4`
  font-family: var(--Roboto);
  font-size: ${(props) => props.size + "rem"};
  font-weight: ${(props) => props.weight};
  margin: 0.5rem 0 0 0.8rem;
`;

const TituloSinopse = styled.h4`
  font-family: var(--Roboto);
  font-size: ${(props) => props.size + "rem"};
  font-weight: ${(props) => props.weight};
  margin: 3rem 0 1rem 0;
`;

const Sinopse = styled.p`
  text-align: center;
  width: 90%;
  font-family: var(--Roboto);
  font-weight: 700;
  margin: 0 0 1rem;
`;

const ContainerPoster = styled.div`
  width: 80vw;
  height: 75vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0px 10px 50px 0px #000 inset;
`;

const Poster = styled.img`
  height: 65%;
  margin-left: 15%;
  border-radius: 5px;
  box-shadow: 0 0 0 2px red, 0 0 0 4px #000, 0 0 0 6px #fff;
`;

const Button = styled.button`
  width: 30%;
  height: 5%;
  margin: 1% 0;
  background-color: ${(props) => props.bgColor};
  font-family: var(--Bebas);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 1.25rem;
`;
