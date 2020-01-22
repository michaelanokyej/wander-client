import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import toursAndUserContext from '/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js';
import RemoveButton from "../removebutton/RemoveButton";

class TourDetailsPage extends React.Component {
  static contextType = toursAndUserContext;

  render () {
    const id = this.props.match.params.tourId;
    const tour = this.context.tours.find(el => el.id === id);
    console.log("id", id)
    console.log("context", this.context)
    console.log("selected tour", tour)

    if (!tour) {
      return (
        <div>
          <h1>Error 404</h1>
        </div>
      );
    }
    return (
      <section className="tourPage">
        <div className="tour">
          <h2 className="tour__title">
            <Link to={`/tours/${tour.id}`}>{tour.name}</Link>
          </h2>
          <img src={tour.img} alt="tour" />
          <p>{tour.city},{tour.state}</p>

          
        <div className="NotePageMain__content">
          {tour.description.split(/\n \r|\n/)}
        </div>
        <div className="Note__dates">
            <div className="Note__dates-modified">
              Posted on{" "}
              <span className="Date">
                {format(new Date(tour.posted), "dd MMM yyyy")}
              </span>
            </div>
          </div>
        </div>
        <RemoveButton id={tour.id} />

      </section>
    )
  }
}

export default TourDetailsPage;