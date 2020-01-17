import React from "react";
import { Route } from "react-router-dom";
import Homepage from '../homepage/Homepage'
import SignUp from '../signUp/SignUp'
import postTour from "../postTour/postTour";
import Login from "../logIn/LogIn";


class Mainpage extends React.Component {
  render() {
    return (
      <main className="App__main">
        <Route
          exact
          path="/"
          component={Homepage}
        />
        <Route
          exact
          path="/signup"
          component={SignUp}
        />
        <Route
          exact
          path="/post-a-tour"
          component={postTour}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
      </main>
    );
  }
}

export default Mainpage;
