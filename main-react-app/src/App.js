import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="header">
        <NavLink to="/">Home-Page</NavLink>
        <NavLink to="/micro-react1">Home-Page</NavLink>
      </div>
      <div id="subapp-viewport"></div>
    </Router>
  );
};

export default App;
