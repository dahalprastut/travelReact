import React from "react";
import { Switch, Route } from "react-router-dom";
import AppHome from "./AppHome";

export default function Index({ match }) {
  return (
    <Switch>
      <Route
        path={`${match.url}/`}
        render={props => <AppHome {...props} />}
      />
    </Switch>
  );
}
