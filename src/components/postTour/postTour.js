import React from "react";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";
import { Redirect } from "react-router-dom";

class postTour extends React.Component {
  state = {
    name: "",
    city: "",
    state: "",
    description: "",
    max_tourists: "",
    img: "",
    policies: "",
    guide_username: "",
    routeToHome: false
  };

  static contextType = toursAndUserContext;
  render() {
    const tourInfo = {
      name: this.state.name,
      city: this.state.city,
      state: this.state.state,
      description: this.state.description,
      max_tourists: this.state.max_tourists,
      img: this.state.img,
      policies: this.state.policies,
      guide_username: this.state.guide_username,
    };

    return (
      <main>
        {this.state.routeToHome && <Redirect to="/home" />}
        <header role="banner">
          <h2>Post a tour!</h2>
        </header>
        <form className="signup-form">
          <div>
            <label htmlFor="name">Tour Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="White House Tour"
              onChange={e => this.setState({ name: e.target.value })}
            />
            </div>
          <div>
            <label htmlFor="city">city</label>
            <input placeholder="Washington" type="text" name="city" id="city" 
              onChange={e => this.setState({ city: e.target.value })}
              />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" name="state" id="state" placeholder="DC" 
              maxLength="2" 
              onChange={e => this.setState({ state: e.target.value })}
              />
          </div>
          <div>
            <label htmlFor="img">Tour Image</label>
            <input placeholder="link to image" type="text" name="img" id="img" 
              onChange={e => this.setState({ img: e.target.value })}
              />
          </div>
          <div>
            <label htmlFor="max_tourists">Max Capacity</label>
            <input type="number" name="max_tourists" id="max_tourists" placeholder="1" 
              onChange={e => this.setState({ max_tourists: e.target.value })}
              />
          </div>
          <div>
            <label htmlFor="policies">Policies</label>
            <input
              type="text"
              name="policies"
              id="policies"
              placeholder="Check in 30 minutes before tour start"
              onChange={e => this.setState({ policies: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="description">Tour Description</label>
            <textarea rows="2" cols="50"
              name="description"
              id="description"
              placeholder="say something about tour"
              onChange={e => this.setState({ description: e.target.value })}
              /> 
          </div>
          <div>
            <label htmlFor="guide_username">Username</label>
            <input type="email" name="guide_username" id="guide_username" 
            placeholder="username/email" 
            onChange={e => this.setState({ guide_username: e.target.value })}
            />
          </div>
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              // console.log("user info f_name", tourInfo.f_name)
              if (tourInfo.name.length === 0) {
                window.alert("tour name cannot be empty");
              } else if (tourInfo.city.length === 0) {
                window.alert(
                  "tour city cannot be empty"
                );
              }
              else if (tourInfo.state.length === 0) {
                window.alert(
                  "tour state cannot be empty"
                );
              } else if (tourInfo.description.length === 0) {
                window.alert("tour description cannot be empty");
              }
              else if (tourInfo.max_tourists.length === 0) {
                window.alert("max_tourists cannot be 0");
              }
              else if (tourInfo.img.length === 0) {
                window.alert("Tour image cannot be empty");
              }
              else if (tourInfo.policies.length === 0) {
                window.alert("Tour policies must be entered");
              }
              else if (tourInfo.guide_username.length === 0) {
                window.alert("guide username must be entered");
              }
               else {
                this.context.postTour(tourInfo);
                this.setState({ routeToHome: true });
              }
            }}
          >Post tour</button>
        </form>
      </main>
    );
  }
}

export default postTour;
