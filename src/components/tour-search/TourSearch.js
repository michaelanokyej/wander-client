import React from "react";
import "./TourSearch.css";

class TourSearch extends React.Component {
  state = {
    city: "",
    state: ""
  };
  render() {
    return (
      <section className="tourSearchSection">
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
              onChange={e => this.setState({ state: e.target.value })}
            />
            <label htmlFor="state" className="label-name">
              <span className="content-name">State</span>
            </label>
          </div>
          <button className="post-tour-button" type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }
}

export default TourSearch;
