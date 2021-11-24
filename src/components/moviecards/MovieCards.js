import React from "react";
import styled from "styled-components";

function MovieCards() {
  return (
    <MovieCardsContainer>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
    </MovieCardsContainer>
  );
}

export default MovieCards;

const MovieCardsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Wrap = styled.div`
  margin: 0 10px;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 10px;
    border: 3px solid #ffffff2c;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 310ms;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
