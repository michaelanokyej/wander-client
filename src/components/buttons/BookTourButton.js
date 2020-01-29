import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";

class BookTourButton extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    return (
      <button className="buttons" type="button">
        Book
      </button>
    );
  }
}

export default BookTourButton;
