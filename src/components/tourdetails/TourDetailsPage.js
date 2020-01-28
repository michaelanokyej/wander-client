import React from "react";
// import { Link } from "react-router-dom";
import { format } from "date-fns";
import toursAndUserContext from "../context/toursAndUserContext.js";
import ProfilePicture from "./profilePic.jpeg";
import "./TourDetailsPage.css";
import BookTourButton from "../buttons/BookTourButton";
import RemoveButton from "../buttons/RemoveButton";

class TourDetailsPage extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    const id = this.props.match.params.tourId;
    const tour = this.context.tours.find(el => el.id === id);
    // console.log("id", id)
    // console.log("context", this.context)
    console.log("selected tour", tour);
    // const button = if (this.context.userName === tour.guide_username){

    // }

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
          {/* <div className="tour__title">
          <h2 >
            <Link to={`/tours/${tour.id}`}>{tour.name}</Link>
          </h2>
          </div>  */}
          <div className="tour__image-container">
            <img src={tour.img} alt="tour" />
          </div>
          <div className="tour__info-guide__info">
            <div className="tour_name-guide_name">
              <div className="tour-name center">
                <span className="titles">{tour.name}</span>
                <span>
                  <p className="text_medium tour__location">
                    {tour.city}, {tour.state}
                  </p>
                </span>
              </div>
              <div className="guide__info center">
                <div className="guide__img-container">
                  <img src={ProfilePicture} alt="user" />
                </div>
                <div className="guide-username text_medium">
                  {tour.guide_username}
                </div>
              </div>
            </div>
            <div className="tour__rules">
              <div className="text_medium center">
                Max Tourists: {tour.max_tourists}
              </div>
              <div className="policies">
                <div className="text_medium center">
                  POLICIES: {tour.policies}
                </div>
              </div>
            </div>
            <div className="tour_description text_medium">
              {tour.description.split(/\n \r|\n/)}
            </div>
            <div className="tour__posted text_medium">
              Posted on{" "}
              <span className="Date text_medium">
                {format(new Date(tour.posted), "dd MMM yyyy")}
              </span>
            </div>
          </div>
          {/*
          If guide userName === to logged in userName show <RemoveButton id={tour.id} /> 
          Else show book tour*/}
          {this.context.userName === tour.guide_username ? (
            <RemoveButton id={tour.id} />
          ) : (
            <BookTourButton />
          )}
        </div>
      </section>
    );
  }
}

export default TourDetailsPage;
