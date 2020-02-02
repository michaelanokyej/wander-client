import React from "react";
import "./About.css";

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
          trip is used to improve our service .{" "}
        </p>

        <p className="about-para">Guides can also rate users after trips.</p>

        <p className="about-para">
          So whether you're traveling to your home state within the US or to
          another state or to the Middle East, Africa or any part of the world; you should wear the
          same confidence!{" "}
        </p>
      </section>
    );
  }
}

export default About;
