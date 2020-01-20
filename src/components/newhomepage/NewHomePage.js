import React from "react";
import TourSearch from '../landingpage/tour-search/TourSearch'
import HomeTourList from '../landingpage/home-tour-list/HomeTourList'
import Footer from '../landingpage/footer/Footer'

class NewHomePage extends React.Component {
  render() {
    return (
      <main>
        <header role="banner">
			  <h1>Wander</h1>
        <h4>Tour like a local</h4>
		    </header>
        <TourSearch />
        <HomeTourList />
        <Footer />
      </main>
    );
  }
}

export default NewHomePage;
