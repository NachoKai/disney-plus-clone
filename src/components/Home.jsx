import React from "react";
import styled from "styled-components";

import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Movies />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 6px);
  background: url("./assets/images/home-background.png") center center / cover no-repeat fixed;
  overflow: hidden;
  margin-bottom: 32px;
`;
