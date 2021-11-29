import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Wrap>
        <TitleWrap></TitleWrap>
        <Buttons>
          <button className="play">
            <img src="/images/play-icon-black.png" alt="" />
            Play
          </button>
          <button className="trailer">
            <img src="/images/play-icon-white.png" alt="" />
            trailer
          </button>
          <button className="plus-icon">
            <img
              src="/images/watchlist-icon.svg"
              className="pluss"
              alt="pluss"
            />
          </button>
          <button className="user">
            <img src="/images/group-icon.png" alt="" />
          </button>
        </Buttons>
        <Info>
          <p style={{ color: "#ffffff", fontSize: 18, lineHeight: 1.5 }}>
            2006 - 2013 • 5 Seasons • Kids, Animation
          </p>
        </Info>
        <Epilogue>
          <p style={{ color: "#ffffff", fontSize: 20, lineHeight: 1.5 }}>
            Mickey entertains preschoolers by inviting them to join him and his
            friends for a date at the Clubhouse. Using early math learning and
            problem solving skills, he leads kids on an interactive adventure of
            learning and fun.
          </p>
        </Epilogue>
      </Wrap>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  height: calc(100vh - 70px);
  background-image: url("/images/details.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 70vw;
`;
const TitleWrap = styled.div``;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 10px;
    padding: 5px 15px;
    outline: none;
    border: none;
    border: 2px solid #fff;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .trailer {
    border-radius: 5px;
    background-color: #ffffff2a;
    color: #ffffff;
  }
  .play {
    border-radius: 5px;
  }
  .user {
    img {
      border-radius: 100%;
    }
    padding: 0;
    overflow: hidden;
    border-radius: 100%;
    background-color: #000000;
  }
  .plus-icon {
    background-color: #0000007a;
    border-radius: 100%;
    padding: 0;
    overflow: hidden;
    width: 40px;
    height: 40px;

    img.pluss {
      width: 100%;
      height: 100%;
      padding: 5px;
      border-radius: 100%;
    }
  }
`;
const Info = styled.div`
  margin-left: 10px;
  /* p {
    margin: 15px 0;
  } */
`;
const Epilogue = styled.div`
  margin-left: 10px;
  p {
    margin: 0;
  }
`;
