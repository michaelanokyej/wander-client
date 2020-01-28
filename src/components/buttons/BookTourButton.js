import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
// import { Link } from "react-router-dom";

class BookTourButton extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    // const id = this.props.id;

    return (
      <button className="buttons" type="button">
        Book
      </button>
    );
  }
}

export default BookTourButton;
