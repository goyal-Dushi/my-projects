import React from "react";
import Glassmorphism from "./pages/Glassmorphism";
import FlipEffect from "./pages/FlipEffect";
import BoxMovement from "./pages/BoxMovement";
import "./index.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/glassmorphism"} component={Glassmorphism} />
        <Route path={"/flipEffect"} component={FlipEffect} />
        <Route path={"/boxMovement"} component={BoxMovement} />
        <Route
          path='/xcoinsForms'
          exact
          component={() => {
            window.location.href =
              "https://goyal-dushi.github.io/X-Coins-Forms/#/";
            return null;
          }}
        />
        <Route
          path='/doremGispsum'
          exact
          component={() => {
            window.location.href =
              "https://goyal-dushi.github.io/dorem-gipsum/#/";
            return null;
          }}
        />
        <Route
          path='/exerciseMern'
          exact
          component={() => {
            window.location.href =
              "https://github.com/goyal-Dushi/exercise-tracker";
            return null;
          }}
        />
        <Route
          path='/pwa'
          exact
          component={() => {
            window.location.href = "https://dgweather.netlify.app/";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
