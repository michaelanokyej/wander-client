import React from "react";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";
import "./HomeTourList.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class HomeTourList extends React.Component {
  static contextType = toursAndUserContext;
  render() {
    console.log(this.context.tours);
    const tours = this.context.tours.map((tour, index) => {
      return (
        <div className="item card" key={index}>
          <img src={tour.img} className="tourImg card-img-top" alt="tour" />
          <div className="card-body">
            <h5 className="card-title">{tour.name}</h5>
            {/* <p className="card-text">{tour.description}</p> */}
            <Link to={`/tours/${tour.id}`} className="btn btn-primary">
              View Tour
            </Link>
          </div>
        </div>
      );
    });
    return (
      <section className="tourListSection">
        <h4>Tours in the United States</h4>
        <div className="wrapper">{tours}</div>
      </section>
    );
  }
}

export default HomeTourList;
