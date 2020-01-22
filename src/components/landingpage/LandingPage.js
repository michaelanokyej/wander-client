import React from "react";
import About from './about/About'
// import TourSearch from './tour-search/TourSearch'
import HomeTourList from './home-tour-list/HomeTourList'
import Footer from './footer/Footer'
import './LandingPage.css'

class Homepage extends React.Component {
  render() {
    return (
      <main>
        <div className="banner">
       {/* <img src="banner3.jpg" alt="logo" className="banner__background"/> */}
			  <h1>Wander</h1>
        <h4>Tour like a local</h4>
		    </div>
        <About />
        {/* <TourSearch /> */}
        <HomeTourList />
        <Footer />
      </main>
    );
  }
}

export default Homepage;
