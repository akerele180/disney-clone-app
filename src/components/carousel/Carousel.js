import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // arrows: false,
  };
  return (
    <ImageSlider {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </ImageSlider>
  );
}

export default Carousel;

const ImageSlider = styled(Slider)`
  &:hover {
    .slick-arrow {
      opacity: 1;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: #ffffff;
    }
  }
  li.slick-active button::before {
    color: #ffffff;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-arrow {
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  /* margin: 0 10px; */
  cursor: pointer;
  &:hover {
    border-radius: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 310ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
