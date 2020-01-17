import React from "react";

class TourSearch extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h3>Find a tour</h3>
          <form class="tour-search-form">
            <div>
              <h4>Location</h4>
              <div>
                <label for="city">City</label>
                <input placeholder='Washington' type="text" name='city' id='city' />
              </div>
              <div>
                <label for="state">State</label>
                <input
                  placeholder="DC"
                  type="text"
                  name="state"
                  id="state"
                  maxlength="2"
                />
              </div>
              <div>
                <h4>Dates</h4>
                <div>
                  <label for="begin">Tour start</label>
                  <input type="date" name='begin' id='begin' placeholder='MM/DD/YYYY'/>
                </div>
                <div>
                  <label for="end">Tour End</label>
                  <input type="date" name='end' id='end' placeholder='MM/DD/YYYY'/>
                </div>
                <div>
                  {/* <input type="radio" name="group" value="group"/>
                  <input type="radio" name="private" value="private"/>  */}
                  <label for="group">
                  <input type="radio" name="group" value="group"/>
                  Group Tour
                  </label> 
                  <label for="private">
                  <input type="radio" name="private" value="private"/>
                  Private Tour
                  </label>
                </div>
              </div>
            </div>
            <button type='submit'>Find A Tour</button>
          </form>
        </header>
      </section>
    );
  }
}

export default TourSearch;
