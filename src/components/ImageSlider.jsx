import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...sliderSettings}>
      <Wrap>
        <Img src="./assets/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <Img src="./assets/images/slider-badag.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 16px;

  li.slick-active {
    button:before {
      font-size: 12px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-dots {
    button:before {
      font-size: 8px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;

    &:before {
      font-size: 32px;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: border 0.2s ease-out;

  &:hover {
    border: 4px solid rgb(249, 249, 249, 0.2);
  }
`;
