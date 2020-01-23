import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";

class SideDrawer extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    // console.log(this.context.userName);
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/post-a-tour">Post Tour</Link>
          </li>
          <li>
            <Link to="/users/:username">{this.context.userName || "Profile"}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
