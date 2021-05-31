import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  login,
  ...rest
}) {
  return (
    <Route
      {...rest}
      //   rest = path="/app"
      render={props => {
        if (login === true) {
          return (
            <Component {...rest} {...props} />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
