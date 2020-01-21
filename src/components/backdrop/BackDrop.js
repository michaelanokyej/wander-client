import React from "react";
import "./BackDrop.css";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";

class BackDrop extends React.Component {
  static contextType = toursAndUserContext;

  render(){
    return (
      <div className="backdrop" onClick={e => this.context.backDropClickHandler()}/>
    );
  }
}

export default BackDrop;