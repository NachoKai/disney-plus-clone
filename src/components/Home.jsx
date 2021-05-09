import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import db from "../firebase";
import { setMovies } from "../redux/movie/movieSlice";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot(snapshot => {
      let tempMovies = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data };
      });
      dispatch(setMovies(tempMovies));
    });
  }, [dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 6px);
  background: url("../assets/images/home-background.png") center center / cover no-repeat fixed;
  overflow: hidden;
  margin-bottom: 32px;
`;
