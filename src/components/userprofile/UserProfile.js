import React from 'react'
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";

class UserProfile extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    return (
      <div>User Profile</div>
    )
  }
}

export default UserProfile;