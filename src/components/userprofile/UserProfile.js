import React from 'react'
import toursAndUserContext from "../context/toursAndUserContext.js";

class UserProfile extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    return (
      <div>User Profile</div>
    )
  }
}

export default UserProfile;