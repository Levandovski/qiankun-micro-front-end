import React from "react";
import { Container, Content } from "./styles";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const { authenticate } = useSelector((state: any) => state.authenticate);
  return (
    <Container>
      <Content>
        <h1>Sub App 4: CRA + React + Typescript</h1>
        <p>Status Redux: {authenticate ? "Autenticado" : "Não Autenticado"}</p>
      </Content>
    </Container>
  );
};

export default App;
