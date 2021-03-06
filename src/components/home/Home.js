import React from "react";
import styled from "styled-components";
import Carousel from "../carousel/Carousel";
import MovieCards from "../moviecards/MovieCards";

function Home() {
  return (
    <Container>
      <Carousel />
      <MovieCards />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  background-color: #212433;
  color: #ffffff;
  padding: 10px calc(3.5vw + 5px) 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`;
