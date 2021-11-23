import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavBar>
      <LogoContainer>
        {/* <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a> */}
      </LogoContainer>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>Search</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
          <span>watchlist</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt="originals-icon" />
          <span>originals</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="movies-icon" />
          <span>movies</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt="eries-icon" />
          <span>series</span>
        </a>
      </NavMenu>
      <ProfilePicture>
        <a href="/">
          <img src="/images/AKERELE.jpg" alt="profile avatar"></img>
        </a>
      </ProfilePicture>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
`;

const LogoContainer = styled.div`
  margin: 0 40px 0 20px;
  width: 80px;
  background-image: url("/images/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  text-transform: uppercase;
  a {
    text-decoration: none;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    margin-right: 25px;

    img {
      margin-right: 1px;
      width: 25px;
    }
    span {
      position: relative;

      &::after {
        position: absolute;
        content: "";
        height: 3px;
        border-radius: 4px;
        background-color: #fff;
        bottom: -7px;
        left: 0;
        right: 0;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: right center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
      }
      &:hover {
        &::after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }
  }
`;
const ProfilePicture = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
