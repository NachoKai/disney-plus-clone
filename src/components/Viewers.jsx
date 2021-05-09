import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <Img src="../assets/images/viewers-disney.png" alt="Disney" />
        <Video autoPlay muted loop playsInline>
          <source src="../assets/videos/1564674844-disney.mp4" type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <Img src="../assets/images/viewers-marvel.png" alt="Marvel" />
        <Video autoPlay muted loop playsInline>
          <source src="../assets/videos/1564676115-marvel.mp4" type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <Img src="../assets/images/viewers-national.png" alt="National" />
        <Video autoPlay muted loop playsInline>
          <source src="../assets/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <Img src="../assets/images/viewers-pixar.png" alt="Pixar" />
        <Video autoPlay muted loop playsInline>
          <source src="../assets/videos/1564676714-pixar.mp4" type="video/mp4" />
        </Video>
      </Wrap>
      <Wrap>
        <Img src="../assets/images/viewers-starwars.png" alt="Star Wars" />
        <Video autoPlay muted loop playsInline>
          <source src="../assets/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </Video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 32px;
  padding: 32px 0;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.3);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -18px;

    video {
      z-index: -1;
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
`;
