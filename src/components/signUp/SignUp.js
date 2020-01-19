import React from "react";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";


class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    routeToHome: false
  };

  static contextType = toursAndUserContext;

  render() {
    const userInfo = {
      f_name: this.state.firstName,
      l_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    // console.log(userInfo)
    // console.log("add user", this.context.addUser)


    return (
      <main>
        <header role="banner">
          <h2>Sign Up!</h2>
        </header>
        <form className="signup-form">
          <div>
            <label htmlFor="first-name">First name</label>
            <input
              placeholder="First name"
              type="text"
              name="first-name"
              id="first-name"
              onChange={e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <input
              placeholder="Last name"
              type="text"
              name="last-name"
              id="last-name"
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="username"
              id="username"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              onChange={e => this.setState({ confirmPassword: e.target.value })}
            />
          </div>
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              // console.log("user info f_name", userInfo.f_name)
              if (userInfo.f_name.length === 0) {
                window.alert("first name cannot be empty");
              } else if (userInfo.l_name.length === 0) {
                window.alert(
                  "Last name cannot be empty"
                );
              }
              else if (userInfo.email.length === 0) {
                window.alert(
                  "email cannot be empty"
                );
              } else if (userInfo.password.length === 0) {
                window.alert("password cannot be empty");
              }
              else if (userInfo.confirmPassword.length === 0) {
                window.alert("Confirm password");
              }
              else if (userInfo.password !== userInfo.confirmPassword) {
                window.alert("Password does not match");
              }
               else {
                this.context.signUp(userInfo);
              }
            }}
          >
            Sign Up
          </button>
        </form>
      </main>
    );
  }
}

export default SignUp;
