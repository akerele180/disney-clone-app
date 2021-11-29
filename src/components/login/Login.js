import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Wrap>
        <ImageTop>
          <img src="./images/cta-logo-one.svg" alt="imagefor viewing" />
        </ImageTop>
        <Button>
          <h3>Get all three</h3>
        </Button>
        <Text>
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
        </Text>
        <ImageBottom>
          <img src="./images/cta-logo-two.png" alt="imagefor viewing" />
        </ImageBottom>
      </Wrap>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0 6vw;
  }
  display: grid;
  place-items: center;
  background: url("./images/login-background.jpg") no-repeat fixed;
  height: calc(100vh - 70px);
  background-position: center;
  background-size: cover;
`;
const Wrap = styled.div`
  max-width: 768px;
  margin: -8% auto 0;
  text-align: center;
  color: #ffffff;
`;
const Text = styled.article`
  p {
    line-height: 1.5rem;
  }
`;
const Button = styled.button`
  width: 100%;
  background: #0162e5;
  color: #fff;
  font-weight: bolder;
  border-radius: 5px;
  padding: 5px 0;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const ImageBottom = styled.div`
  width: 100%;
  img {
    width: 90%;
  }
`;
const ImageTop = styled.div`
  img {
    width: 90%;
  }
`;
