import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import toursAndUserContext from '/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js';
import RemoveButton from "../removebutton/RemoveButton";

class TourDetailsPage extends React.Component {
  static contextType = toursAndUserContext;

  render () {
    const id = Number(this.props.match.params.noteId);
    const tour = this.context.tours.find(el => el.id === id);

    if (!tour) {
      return (
        <div>
          <h1>404</h1>
        </div>
      );
    }
    return (
      <h1>Hello World</h1>
    )
  }
}

export default TourDetailsPage;