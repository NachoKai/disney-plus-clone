import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setMovies } from "../redux/movie/movieSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider.jsx";
import NewDisney from "./NewDisney.jsx";
import Originals from "./Originals.jsx";
import Recommends from "./Recommends.jsx";
import Trending from "./Trending.jsx";
import Viewers from "./Viewers.jsx";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    db.collection("movies").onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            return recommends;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            return newDisney;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            return originals;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            return trending;
          default:
            return null;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  margin-bottom: 32px;
  background: url("/images/home-background.png") center center / cover no-repeat fixed;
`;

export default Home;
