import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import { Link } from "react-router-dom";

class NotSignedInButton extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    const id = this.props.id;

    return (
      <button
        className="buttons"
        type="button"
        onClick={() => {
          this.context.deleteTour(id);
        }}
      >
        <Link to="/signup">Sign in to Book</Link>
      </button>
    );
  }
}

export default NotSignedInButton;
