import React from 'react';
import './DrawerToggleButton.css';
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";


class DrawerToggleButton extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    return (
      <button className="toggle-button" onClick={e => this.context.drawerToggleClickHandler()}>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
  </button>
    )
  }
}

export default DrawerToggleButton;
