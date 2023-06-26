import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function SkeletonComponent() {
  const isMobile = useMediaQuery({ query: "(max-width: 844px)" });

  return (
    <>
      {!isMobile ? (
        <>
          <ContainerTituloSkeleton>
            <SkeletonTituloFilme />
          </ContainerTituloSkeleton>
          <ContainerSkeleton>
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
          </ContainerSkeleton>
        </>
      ) : (
        <>
          <ContainerTituloSkeleton>
            <SkeletonTituloFilme />
          </ContainerTituloSkeleton>
          <ContainerSkeleton>
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
            <SkeletonPoster />
          </ContainerSkeleton>
        </>
      )}
    </>
  );
}

const ContainerSkeleton = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
`;

const SkeletonPoster = styled(Skeleton).attrs((props) => ({
  sx: { bgcolor: "grey.900" },
  variant: "rectangular",
  height: "15.625rem",
  width: "10.625rem",
  ...props,
}))`
border-radius: 5px`;

const SkeletonTituloFilme = styled(Skeleton).attrs({
  sx: { bgcolor: "grey.900" },
  variant: "text",
  height: "4rem",
  width: "25rem",
})`
  margin-left: 2rem;
`;

const ContainerTituloSkeleton = styled.div``;
