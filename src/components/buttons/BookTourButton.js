import React from "react";
import toursAndUserContext from "../context/toursAndUserContext.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

class BookTourButton extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    routeToHome: false
  };

  static contextType = toursAndUserContext;

  render() {
    const tour = this.props.tour;
    console.log(tour);
    const bookingInfo = {
      tour_id: tour.id,
      tour_name: tour.name,
      guide_id: tour.guide_id,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    return (
      <>
        {this.state.routeToHome && <Redirect to="/home" />}
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <button
          className="buttons"
          type="button"
          onClick={() => {
            this.context.handleBooking(bookingInfo);
            this.setState({ routeToHome: true });
          }}
        >
          Book
        </button>
      </>
    );
  }
}

export default BookTourButton;
