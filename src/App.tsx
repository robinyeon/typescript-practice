import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Container>
        <H1>PROTECTED</H1>
      </Container>
    </div>
  );
}

export default App;
