import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../landingpage/LandingPage";
import SignUp from "../signUp/SignUp";
import PostTour from "../postTour/PostTour";
import Login from "../logIn/LogIn";
import TourDetailsPage from "../tourdetails/TourDetailsPage";
import UserProfile from "../userprofile/UserProfile";
import NewHomePage from "../newhomepage/NewHomePage.js";
import SearchResultsPage from "../searchresults/SearchResultsPage";

class MainPage extends React.Component {
  render() {
    return (
      <main className="App__main">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={NewHomePage} />
        <Route exact path="/users/:userId" component={UserProfile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/post-a-tour" component={PostTour} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tours/:tourId" component={TourDetailsPage} />
        <Route exact path="/search/tours" component={SearchResultsPage} />
      </main>
    );
  }
}

export default MainPage;
