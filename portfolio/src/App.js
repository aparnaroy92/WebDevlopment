import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Home/>
        <Route exact path="/Aboutme" component={Aboutme} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;