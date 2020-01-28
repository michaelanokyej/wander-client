import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import TourSearch from "../tour-search/TourSearch";

class SearchResultsPage extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    // const parameters = this.props.match.params;
    // const tourCity = this.props.match.params.tourCity.toUpperCase();
    // const tourState = this.props.match.params.tourState.toUpperCase();
    // const tourResults = this.context.tours.map((tour, index) => {
      
    //       if(tour.city.toUpperCase() === tourCity &&
    //       tour.state.toUpperCase() === tourCity){
    //         return tour;
    //       }
    
    // });
    // console.log("results", tourResults);
    // console.log("tours", this.context.tours);
    // console.log("params", parameters);
    // console.log("tour city and state", tourCity, tourState);
    return (
      <div>
        <TourSearch />
        <h1>
          Tours in {this.context.searchLocation}
        </h1>
      </div>
    );
  }
}

export default SearchResultsPage;
