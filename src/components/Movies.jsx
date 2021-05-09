import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getMovies } from "../redux/movie/movieSlice";

const Movies = () => {
  const movies = useSelector(getMovies);

  return (
    <Container>
      <Title>Recommended for You</Title>
      <Content>
        {movies &&
          movies.map(movie => {
            return (
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <Img src={movie.cardImg} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h3``;

const Content = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.3);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -18px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
