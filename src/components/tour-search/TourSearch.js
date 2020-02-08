import React from "react";
import "./TourSearch.css";
import toursAndUserContext from "../context/toursAndUserContext.js";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class TourSearch extends React.Component {
  static contextType = toursAndUserContext;

  state = {
    city: "",
    state: "",
    routeToResultsPage: false
  };
  render() {
    const searchInfo = {
      city: this.state.city,
      state: this.state.state
    };
    return (
      <section className="tourSearchSection">
        {this.state.routeToResultsPage && <Redirect to="/search/tours" />}

        <form className="tour-search-from">
          <div className="div_form">
            <input
              required
              type="text"
              name="city"
              id="city"
              onChange={e => this.setState({ city: e.target.value })}
            />
            <label htmlFor="city" className="label-name">
              <span className="content-name">City</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="text"
              name="state"
              id="state"
              maxLength="2"
              onChange={e => this.setState({ state: e.target.value })}
            />
            <label htmlFor="state" className="label-name">
              <span className="content-name">State</span>
            </label>
          </div>
          <button
            className="post-tour-button"
            type="submit"
            onClick={e => {
              e.preventDefault();
              if (
                this.state.city.length !== 0 &&
                this.state.state.length !== 0
              ) {
                this.context.handleTourSearch(searchInfo);
                this.setState({
                  routeToResultsPage: true
                });
              } else {
                Swal.fire("city and state are required to search");
              }
            }}
          >
            Search Tours
          </button>
        </form>
      </section>
    );
  }
}

export default TourSearch;
