import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import toursAndUserContext from "../context/toursAndUserContext.js";

class SideDrawer extends React.Component {
  static contextType = toursAndUserContext;

  linkToProfile = `/users/${this.context.userName}`;

  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          {this.context.loggedIn ? (
            <>
              <li
                onClick={() => {
                  this.context.backDropClickHandler();
                }}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                onClick={() => {
                  this.context.backDropClickHandler();
                }}
              >
                <Link to="/post-a-tour">Post Tour</Link>
              </li>

              <li
                onClick={() => {
                  this.context.backDropClickHandler();
                  this.context.handleProfileLink();
                }}
              >
                {" "}
                <Link to={this.linkToProfile}>
                  {this.context.userName || "Profile"}
                </Link>
              </li>
              <li
                onClick={() => {
                  this.context.handleSignOut();
                  this.context.backDropClickHandler();
                }}
              >
                {" "}
                <Link to="/">Sign out</Link>
              </li>
            </>
          ) : (
            <li
              onClick={() => {
                this.context.backDropClickHandler();
              }}
            >
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
