import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { Container, Header } from "./styles";
import Login from "./pages/login";

const App = () => {
  const RoutesInternal = () => {
    return (
      <Router>
        <Routes>
          <Route key={0} path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  };
  return (
    <>
      <Container>
        <div className="navbar">
          <Router>
            <Header>
              <NavLink to="/">Home Page</NavLink>
              <NavLink to="/micro-react-sub-app1">CRA + JS App 1</NavLink>
              <NavLink to="/micro-react-sub-app2">CRA + JS App 2</NavLink>
              <NavLink to="/micro-react-sub-app3">Vite + TS App 3</NavLink>
              <NavLink to="/micro-react-sub-app4">CRA + TS App 4</NavLink>
            </Header>
          </Router>
        </div>
      </Container>

      <div id="subapp-viewport">{RoutesInternal()}</div>
    </>
  );
};

export default App;
