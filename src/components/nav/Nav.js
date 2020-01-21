import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";

class NavBar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler}/>
          </div>
          <div className="toolbar__logo"><Link to="/"><img src="IMG_2340.png" alt="logo"/></Link></div>
          <div className="spacer" />
          <div className="toolbar_navigation_items">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/post-a-tour">Post Tour</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
