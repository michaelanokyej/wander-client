import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import TourSearch from "../tour-search/TourSearch";
import { Link } from "react-router-dom";


class SearchResultsPage extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    const results = this.context.searchResults;

    // if(results.length === 0){
    //   return (
    //     <div>
    //       <h1>Error: There was an issue with your search request</h1>
    //     </div>
    //   );
    // }

    const tours = this.context.searchResults.map((tour, index) => {
      return (
        <div className="cards" key={index}>
          <div className="card">
            <div className="card__img-container">
              <Link to={`/tours/${tour.id}`}>
                <img src={tour.img} alt="tour" />
              </Link>
            </div>
            <div className="card__content">
              <p className="card__title text--medium">{tour.name}</p>
              <div className="card__info">
                <p className="text--medium">{tour.state}</p>
                <Link to={`/tours/${tour.id}`}>
                  <p className="card__price text--medium">View</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <TourSearch />
        {results.length === 0 ? (<h1>
          NO TOURS FOUND IN {this.context.searchLocation}
        </h1>) : (
        <>
        <h1>
          TOURS IN {this.context.searchLocation}
        </h1>
        <div className="wrapper cards">{tours}</div>
        </>
        )}
        
      </div>
    );
  }
}

export default SearchResultsPage;
