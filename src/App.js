import React from "react";
import Glassmorphism from "./pages/Glassmorphism";
import FlipEffect from "./pages/FlipEffect";
import BoxMovement from "./pages/BoxMovement";
import "./index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router basename={"https://goyal-dushi.github.io/my-projects/"}>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/glassmorphism"} component={Glassmorphism} />
        <Route path={"/flipEffect"} component={FlipEffect} />
        <Route path={"/boxMovement"} component={BoxMovement} />
        <Route
          path='/xcoinsForms'
          component={() => {
            window.location.href =
              "https://goyal-dushi.github.io/X-Coins-Forms/#/";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
