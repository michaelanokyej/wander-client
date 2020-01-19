import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link className='nav-link' to="/">Logo</Link>
        <Link className='nav-link' to="/signup">Sign up</Link>
        <Link className='nav-link' to="/login">Log In</Link>
        <Link className='nav-link' to="/post-a-tour">Post a tour</Link>
      </nav>
    );
  }
}

export default NavBar;
