import React from "react";
import Container from "react-bootstrap/Container";
import { Board } from "./components/Board";
import { Title } from "./components/Title";

function App() {
  return (
    <Container>
      <Title
        text="Posts"
        background="transparent"
        textColor="#005cbf"
        textAlign="center"
      />
      <Board />
    </Container>
  );
}

export default App;
