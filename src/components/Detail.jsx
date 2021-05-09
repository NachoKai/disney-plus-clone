import db from "../firebase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) setMovie(doc.data());
        else return;
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <ImgBackground src={movie.backgroundImg} />
          </Background>
          <Title>
            <ImgTitle src={movie.titleImg} />
          </Title>
          <Controls>
            <Play>
              <img src="../assets/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </Play>
            <Trailer>
              <img src="../assets/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </Trailer>
            <Add>
              <span>+</span>
            </Add>
            <GroupWatch>
              <img src="../assets/images/group-icon.png" alt="Group Watch" />
            </GroupWatch>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 6px);
  overflow: hidden;
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
`;

const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  width: 35vw;
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  margin-top: 32px;
`;

const ImgTitle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-top: 16px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const Play = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 16px;
  margin-right: 24px;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: background-color 0.1s ease-out;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const Trailer = styled(Play)`
  background-color: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgb(100, 100, 100);
  }
`;

const Add = styled(Play)`
  width: 36px;
  height: 36px;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.6);
  margin-right: 16px;

  &:hover {
    background-color: rgb(100, 100, 100);
  }

  span {
    font-size: 32px;
    color: #fff;
  }
`;

const GroupWatch = styled(Add)`
  background-color: rgb(1, 1, 1);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 32px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  min-height: 20px;
  line-height: 1.4;
  margin-top: 16px;
  max-width: 750px;
`;
