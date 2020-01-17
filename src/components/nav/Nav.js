import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link class='nav-link' to="/">Logo</Link>
        {/* <Link class='nav-link' to="/guide-signup-form">Become a guide</Link> */}
        <Link class='nav-link' to="/signup">Sign up</Link>
        <Link class='nav-link' to="/login">Log In</Link>
        <Link class='nav-link' to="/post-a-tour">Post a tour</Link>
      </nav>
    );
  }
}

export default NavBar;
