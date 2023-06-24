import styled from 'styled-components';

export default function YouTubeVideo({ videoId }){
    
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoContainer>
      <VideoFrame src={embedUrl} frameborder="0" allowfullscreen />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  width: 100%;
  max-width: 560px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 315px;
`;
