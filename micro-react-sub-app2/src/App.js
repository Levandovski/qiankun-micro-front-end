import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { authenticate } = useSelector((state) => state.authenticate);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sub App 2: Status : {authenticate ? "Autenticado" : "Não Autenticado"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
