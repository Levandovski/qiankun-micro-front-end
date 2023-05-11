import React from "react";
import { Container, Content } from "./styles";
import { useSelector } from "react-redux";

const App = () => {
  const { authenticate } = useSelector((state) => state.authenticate);
  return (
    <Container>
      <Content>
        <h1>CRA + React + JS</h1>
        <p>
          Sub App 2: Status : {authenticate ? "Autenticado" : "Não Autenticado"}
        </p>
      </Content>
    </Container>
  );
};

export default App;
