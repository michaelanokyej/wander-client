import React from "react";
import toursAndUserContext from "/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js";
import { Redirect } from "react-router-dom";
import "./SignUpAndSignIn.css";

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    routeToHome: false,
    signUpToggle: ""
  };

  static contextType = toursAndUserContext;

  handleSignUpToggle = () => {
    this.setState({ signUpToggle: "container right-panel-active" });
  };

  handleSignInToggle = () => {
    this.setState({
      signUpToggle: ""
    });
  };

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
      <main className="signUp__signIn">
        {this.state.routeToHome && <Redirect to="/home" />}
        {/* <header role="banner">
          <h2>Sign Up!</h2>
        </header>
        <form classNameName="signup-form">
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
                this.setState({ routeToHome: true });
              }
            }}
          >
            Sign Up
          </button>
        </form>
        <div>Click <Link to="/login">here</Link> to login</div> */}

        <div className={this.state.signUpToggle || "container"} id="container">
          <div className="form-container sign-up-container">
            <form action="#" className="signUp__signIn-form">
              <h1>Create Account</h1>
              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span> */}
              <input
                placeholder="First name"
                type="text"
                required
                name="first-name"
                id="first-name"
                onChange={e => this.setState({ firstName: e.target.value })}
              />
              <input
                placeholder="Last name"
                required
                type="text"
                name="last-name"
                id="last-name"
                onChange={e => this.setState({ lastName: e.target.value })}
              />
              <input
                type="email"
                name="username"
                id="username"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  this.context.signUp(userInfo);
                  this.setState({ routeToHome: true });
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span> */}
              <input
                type="email"
                name="username"
                id="username"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              {/* <a href="#">Forgot your password?</a> */}
              <button
                onClick={e => {
                  e.preventDefault();
                  const loginInfo = {
                    email: this.state.email,
                    password: this.state.password
                  };
                  this.context.logIn(loginInfo);
                  this.setState({ routeToHome: true });
                }}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => this.handleSignInToggle()}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Join us and tour the world as a local</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => this.handleSignUpToggle()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default SignUp;
