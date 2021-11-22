import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>This is the header component</h1>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #090b13;
`;
