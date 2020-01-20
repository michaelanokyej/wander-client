import React from "react";
import { Route } from "react-router-dom";
import LandingPage from '../landingpage/LandingPage'
import SignUp from '../signUp/SignUp'
import postTour from "../postTour/postTour";
import Login from "../logIn/LogIn";
import TourDetailsPage from "../tourdetails/TourDetailsPage";
import NewHomePage from "../newhomepage/NewHomePage.js";




class Mainpage extends React.Component {
  render() {
    return (
      <main className="App__main">
        <Route
          exact
          path="/"
          component={LandingPage}
        />
        <Route
          exact
          path="/home"
          component={NewHomePage}
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
        <Route
          exact
          path="/tours/:tourId"
          component={TourDetailsPage}
        />
      </main>
    );
  }
}

export default Mainpage;
