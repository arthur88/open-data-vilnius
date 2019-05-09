import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GrafityinCity from "./GrafityinCity";
import DangerousObjects from "./DangerousObjects";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/grafity-in-city" component={GrafityinCity} />
      <Route exact path="/dangerous-objects" component={DangerousObjects} />
    </Switch>
  </main>
);

export default Main;
