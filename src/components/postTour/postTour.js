import React from "react";

class postTour extends React.Component {
  render() {
    return (
      <main>
        <header role="banner">
          <h2>Post a tour!</h2>
        </header>
        <form class="signup-form">
          <div>
            <label for="country">Country</label>
            <input placeholder="USA" type="text" name="country" id="country" />
          </div>
          <div>
            <label for="city">city</label>
            <input placeholder="Washington" type="text" name="city" id="city" />
          </div>
          <div>
            <label for="state">State</label>
            <input type="text" name="state" id="state" placeholder="DC" />
          </div>
          <div>
            Do you have a vehicle?
            <label for="yes">
              <input type="radio" name="yes" value="yes" />
              Yes
            </label>
            <label for="yes">
              <input type="radio" name="no" value="no" />
              No
            </label>
          </div>
          <div>
            <label for="maxCapa">Max Capacity</label>
            <input type="number" name="maxCapa" id="maxCapa" placeholder="1" />
          </div>
          <div>
            <label for="policies">Policies</label>
            <input
              type="text"
              name="policies"
              id="policies"
              placeholder="Check in 30 minutes before tour start"
            />
          </div>
          <div>
            <label for="description">Tour Description</label>
            <textarea rows="2" cols="50"
              name="description"
              id="description"
              placeholder="say something about tour"/> 
          </div>
          <div>
            <label for="guide">Guide Name</label>
            <input
              type="text"
              name="guide"
              id="guide"
              placeholder="fist-name last-name"
            />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="email" name="username" id="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Post tour</button>
        </form>
      </main>
    );
  }
}

export default postTour;
