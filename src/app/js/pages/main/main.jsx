import React from "react";
import { Switch, Route } from "react-router-dom";
import Work from "../work/work";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Work />
      </Route>
    </Switch>
  );
}
