import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import "./HomeTourList.css";
import { Link } from "react-router-dom";

class HomeTourList extends React.Component {
  static contextType = toursAndUserContext;
  render() {
    const tours = this.context.tours.map((tour, index) => {
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
      <section className="tourListSection">
        <h4 className="homeTourHeader">Browse tours in the United States</h4>
        <div className="wrapper cards">{tours}</div>
      </section>
    );
  }
}

export default HomeTourList;
