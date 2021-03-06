import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
import { Redirect } from "react-router-dom";
import "./PostTour.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class PostTour extends React.Component {
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
      guide_username: this.state.guide_username
    };

    return (
      <main className="post-tour-body">
        {this.state.routeToHome && <Redirect to="/home" />}
        <header role="banner">
          <h2>Post a tour!</h2>
        </header>
        <form className="signup-form">
          <div className="div_form">
            <input
              required
              type="text"
              name="name"
              id="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Tour Name</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="text"
              name="city"
              id="city"
              onChange={e => this.setState({ city: e.target.value })}
            />
            <label htmlFor="city" className="label-name">
              <span className="content-name">city</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="text"
              name="state"
              id="state"
              maxLength="2"
              onChange={e => this.setState({ state: e.target.value })}
            />
            <label htmlFor="state" className="label-name">
              <span className="content-name">State</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="text"
              name="img"
              id="img"
              onChange={e => this.setState({ img: e.target.value })}
            />
            <label htmlFor="img" className="label-name">
              <span className="content-name">Tour Image</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="number"
              name="max_tourists"
              id="max_tourists"
              onChange={e => this.setState({ max_tourists: e.target.value })}
            />
            <label htmlFor="max_tourists" className="label-name">
              <span className="content-name">Max Capacity</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              type="text"
              name="policies"
              id="policies"
              onChange={e => this.setState({ policies: e.target.value })}
            />
            <label htmlFor="policies" className="label-name">
              <span className="content-name">Policies</span>
            </label>
          </div>
          <div className="div_form">
            <input
              required
              name="description"
              id="description"
              onChange={e => this.setState({ description: e.target.value })}
            />
            <label htmlFor="description" className="label-name">
              <span className="content-name">Tour Description</span>
            </label>
          </div>
          {/* <div className="div_form">
            <input
              required
              type="email"
              name="guide_username"
              id="guide_username"
              onChange={e => this.setState({ guide_username: e.target.value })}
            />
            <label htmlFor="guide_username" className="label-name">
              <span className="content-name">Username/Email</span>
            </label>
          </div> */}
          <button
            className="post-tour-button"
            type="submit"
            onClick={e => {
              e.preventDefault();
              if (tourInfo.name.length === 0) {
                Swal.fire("tour name cannot be empty");
              } else if (tourInfo.city.length === 0) {
                Swal.fire("tour city cannot be empty");
              } else if (tourInfo.state.length === 0) {
                Swal.fire("tour state cannot be empty");
              } else if (tourInfo.description.length === 0) {
                Swal.fire("tour description cannot be empty");
              } else if (tourInfo.max_tourists.length === 0) {
                Swal.fire("max_tourists cannot be 0");
              } else if (tourInfo.img.length === 0) {
                Swal.fire("Tour image cannot be empty");
              } else if (tourInfo.policies.length === 0) {
                Swal.fire("Tour policies must be entered");
              } else {
                this.context.postTour(tourInfo);
                this.setState({ routeToHome: true });
              }
            }}
          >
            Post tour
          </button>
        </form>
      </main>
    );
  }
}

export default PostTour;
