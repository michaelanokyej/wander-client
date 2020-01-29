import React from "react";
import TourSearch from "../tour-search/TourSearch";
import HomeTourList from "../home-tour-list/HomeTourList";

class NewHomePage extends React.Component {
  render() {
    return (
      <main>
        <TourSearch />
        <HomeTourList />
      </main>
    );
  }
}

export default NewHomePage;
