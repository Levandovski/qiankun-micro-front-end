import { Container, Content } from "./App";
import { useSelector } from "react-redux";

function App() {
  const { authenticate } = useSelector((state: any) => state.authenticate);
  return (
    <Container>
      <Content>
        <h1>Vite + React + Typescript</h1>
        <p>
          Sub App 3: Status : {authenticate ? "Autenticado" : "Não Autenticado"}
        </p>
      </Content>
    </Container>
  );
}

export default App;
