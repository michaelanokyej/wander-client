import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import "./UserProfile.css";
import ProfilePicture from "./profilePic.jpeg";

class UserProfile extends React.Component {
  static contextType = toursAndUserContext;

  render() {
    // console.log("context", this.context);
    return (
      <div className="card-container">
        <div className="upper-container">
          <div className="image-container">
            <img src={ProfilePicture} alt="user" />
          </div>
        </div>
        <div className="lower-container">
          <div>
            <h3>
              Name: {this.context.userFirstName} {this.context.userLastName}
            </h3>
            <h4>UserName: {this.context.userName}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
