import React from "react";
import { Container, Content } from "./styles";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const { authenticate } = useSelector((state: any) => state.authenticate);
  return (
    <Container>
      <Content>
        <h1>CRA + React + Typescript</h1>
        <p>
          Sub App 4: Status : {authenticate ? "Autenticado" : "Não Autenticado"}
        </p>
      </Content>
    </Container>
  );
};

export default App;
