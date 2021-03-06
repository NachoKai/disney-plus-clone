import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import db from "../firebase";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.error("Document not found.");
        }
      })
      .catch(error => {
        console.error("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      {detailData ? (
        <>
          <Background>
            <img alt={detailData.title} src={detailData.backgroundImg} />
          </Background>
          <ImageTitle>
            <img alt={detailData.title} src={detailData.titleImg} />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Play>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
              </Play>
              <Trailer>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src="/images/group-icon.png" alt="Group Watch" />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
          </ContentMeta>{" "}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px auto;
  margin-top: 64px;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 500px;
    min-width: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Play = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  transition: all 0.2s ease-out;

  img {
    width: 32px;
    object-fit: cover;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
      object-fit: cover;
    }
  }
`;

const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(118, 118, 118);
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.2s ease-out;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }

  &:hover {
    border: 2px solid rgb(118, 118, 118);
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease-out;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    background: rgb(118, 118, 118);
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
