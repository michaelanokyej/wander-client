import React from 'react'
import toursAndUserContext from '/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js';
import { Link } from "react-router-dom";


class RemoveButton extends React.Component {
  static contextType = toursAndUserContext;

  render () {
    const id = this.props.id;

    return (
      <button
        className="Note__delete"
        type="button"
        onClick={() => {
          this.context.deleteTour(id);
        }}
      >
        {/* This links to the root  */}
        <Link to="/">remove</Link>
        {/* remove */}
      </button>
    )
  }
}

export default RemoveButton;