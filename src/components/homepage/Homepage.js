import React from "react";
import About from './about/About'
import TourSearch from './tour-search/TourSearch'
import HomeTourList from './home-tour-list/HomeTourList'
import Footer from './footer/Footer'
import './Homepage.css'

class Homepage extends React.Component {
  render() {
    return (
      <main>
        <header role="banner">
			  <h1>Wander</h1>
        <h4>Tour like a local</h4>
		    </header>
        <About />
        <TourSearch />
        <HomeTourList />
        <Footer />
      </main>
    );
  }
}

export default Homepage;
