import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <section>
        <p className="about-para">
          {" "}
          Traveling within the same country or to a foreign country for the
          first time can be extremely challenging; where to go, how to get
          there, what to eat, hot places to visit of historical significance or
          contemporary architecture; how safe to travel alone-avoiding high
          security risk zones, the local language, and culture etc.{" "}
        </p>

        <p className="about-para">
          This guide app looks to solve all these by connecting users to
          dedicated Professionals, screened and Trained Guides for every trip.{" "}
        </p>

        <p className="about-para">
          Users can choose a guide based on their ratings and expertise of all
          available professionally profiled local guides at any given
          destination. Best places to visit are curated for the pleasure of the
          tourists. Ratings and comments for places visited, guides after each
          trip is used to improve our service . Guides can also rate users after
          trips.{" "}
        </p>

        <p className="about-para">
          So whether you're traveling to your home state within the US or to
          another state or to the Middle East, Africa or any part of the world;
          you should wear the same confidence!{" "}
        </p>

        <h1>How to use App</h1>
        <p className="about-para">
          You can browse the tours below or you can click on{" "}
          <Link to="/signup">Sign Up</Link> in the navigation bar to Sign in or
          Sign up if you are not already a user.{" "}
        </p>

        <h4>Sign up / Sign in</h4>
        <p className="about-para">
          To sign up as a new user, please provide the requested information.
          You can also use; Email: testaccount@user.com Password: testpass to
          log in for quick access.{" "}
        </p>

        <h4>Post a tour</h4>
        <p className="about-para">
          Please use this image when posting a tour -
          https://source.unsplash.com/oN_cUY1v7hs or add the image id from any
          image from unsplash.com to https://source.unsplash.com/{" "}
        </p>
      </section>
    );
  }
}

export default About;
