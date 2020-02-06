import React from "react";
import { Link } from "react-router-dom";

class NotSignedInButton extends React.Component {
  render() {
    return (
      <button className="buttons" type="button">
        <Link to="/signup">Sign in to Book</Link>
      </button>
    );
  }
}

export default NotSignedInButton;
