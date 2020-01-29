import React from "react";
import About from "./about/About";
import HomeTourList from "../home-tour-list/HomeTourList";
import "./LandingPage.css";

class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-page">
        <div>
          <h1>Wander</h1>
          <h4>Tour like a local</h4>
        </div>
        <About />
        <HomeTourList />
      </main>
    );
  }
}

export default Homepage;
