import React from "react";
import "./TourSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TourSearch extends React.Component {
  render() {
    // const element = <FontAwesomeIcon icon={faCoffee} />
    return (
      <section className="tourSearchSection">
        <header>
          <h3>Find a tour</h3>
          <div className="search">
            <div className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <form>
              <div className="row">
                <div className="inputDiv">
                  <input placeholder="city" type="text" name="city" id="city" />
                </div>
                <div className="inputDiv">
                  <input
                    placeholder="State"
                    type="text"
                    name="state"
                    id="state"
                    maxLength="2"
                  />
                </div>

                <div className="inputDiv">
                  <input type="submit" name="" value="Search" />
                </div>
              </div>
            </form>
          </div>
        </header>
      </section>
    );
  }
}

export default TourSearch;
