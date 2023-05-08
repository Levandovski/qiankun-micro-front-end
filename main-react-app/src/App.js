import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Container, Header } from "./styles";

const App = () => {
  return (
    <>
      <Container>
        <div className="navbar">
          <Router>
            <Header>
              <NavLink to="/">Home-Page</NavLink>
              <NavLink to="/micro-react-sub-app1">React Sub App 1</NavLink>
              <NavLink to="/micro-react-sub-app2">React Sub App 1</NavLink>
            </Header>
          </Router>
        </div>
      </Container>
      <div id="subapp-viewport"></div>
    </>
  );
};

export default App;
