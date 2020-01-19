import React from "react";

class TourSearch extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h3>Find a tour</h3>
          <form className="tour-search-form">
            <div>
              <h4>Location</h4>
              <div>
                <label htmlFor="city">City</label>
                <input placeholder='Washington' type="text" name='city' id='city' />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input
                  placeholder="DC"
                  type="text"
                  name="state"
                  id="state"
                  maxLength="2"
                />
              </div>
              <div>
                <h4>Dates</h4>
                <div>
                  <label htmlFor="begin">Tour start</label>
                  <input type="date" name='begin' id='begin' placeholder='MM/DD/YYYY'/>
                </div>
                <div>
                  <label htmlFor="end">Tour End</label>
                  <input type="date" name='end' id='end' placeholder='MM/DD/YYYY'/>
                </div>
                <div>
                  {/* <input type="radio" name="group" value="group"/>
                  <input type="radio" name="private" value="private"/>  */}
                  <label htmlFor="group">
                  <input type="radio" name="group" value="group"/>
                  Group Tour
                  </label> 
                  <label htmlFor="private">
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
