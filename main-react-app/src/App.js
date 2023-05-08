import React from "react";
import "./styles.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Router>
            <div className="header">
              <NavLink to="/">Home-Page</NavLink>
              <NavLink to="/micro-react1">Home-Page</NavLink>
            </div>
          </Router>
        </div>
      </div>
      <div id="subapp-viewport"></div>
    </>
  );
};

export default App;
