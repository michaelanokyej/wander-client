import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  render() {
    return (
      // <nav role="navigation">
      //   <Link classNameName='nav-link' to="/home">Logo</Link>
      //   <Link classNameName='nav-link' to="/signup">Sign up</Link>
      //   <Link classNameName='nav-link' to="/login">Log In</Link>
      //   <Link classNameName='nav-link' to="/post-a-tour">Post a tour</Link>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/post-a-tour">Post Tour</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/login" tabIndex="-1" aria-disabled="true">/login</Link>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default NavBar;
