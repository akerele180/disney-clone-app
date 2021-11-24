import React from "react";
// import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ImageSlider>
      <Slider {...settings}>
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
      </Slider>
    </ImageSlider>
  );
}

export default Carousel;

const ImageSlider = styled.section`
  /* margin-top: 20px; */
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
