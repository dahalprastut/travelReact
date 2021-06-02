import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import ProtectedRoute from "./helpers/authHelper";
import Login from "./views/user/login";
import SignUp from "./views/user/signup";
import GlobalStyle from "./components/GlobalStyle";

import HomeUser from "./views/user/homeuser";
import AppIndex from "./views/app";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NotificationContainer />
      <Switch>
        <Route
          path="/login"
          render={props => <Login {...props} />}
        />
        <Route
          path="/signup"
          render={props => <SignUp {...props} />}
        />

        <Route exact path="/">
          <HomeUser />
        </Route>

        <ProtectedRoute
          path="/app"
          component={AppIndex}
        />

        {/* <Route path="/unauthorized" ><Unauthorized/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
