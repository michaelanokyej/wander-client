import React from "react";
import NavBar from "./components/nav/Nav";
import MainPage from "./components/mainpage/MainPage";
import toursAndUserContext from "./components/context/toursAndUserContext";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";
import Footer from "./components/footer/Footer";
import { tokenService } from "./components/TokenService";
import { format } from "date-fns";
import "./App.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class App extends React.Component {
  state = {
    loggedIn: false,
    userId: "",
    userEmail: "",
    userName: tokenService.userName,
    userFirstName: "",
    userLastName: "",
    token: tokenService.token,
    tours: [],
    tourSearchResults: [],
    sideDrawerOpen: false,
    searchResults: [],
    searchLocation: ""
  };

  componentDidMount() {
    if (this.state.token !== null && this.state.userName !== null) {
      const loggedInUser = {
        userName: this.state.userName
      };

      fetch(`https://pacific-sands-75155.herokuapp.com/api/auth/`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(loggedInUser)
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({
            loggedIn: true,
            userId: res.id,
            userLastName: res.lastName,
            userFirstName: res.firstName,
            userName: res.userName,
            userEmail: res.useremail
          });
          this.fetchTours();
        })
        .catch(err => {
          console.error({ err });
        });
    } else {
      this.fetchTours();
    }
  }

  handleProfileLink = () => {
    const loggedInUser = {
      userName: this.state.userName
    };

    fetch(`https://pacific-sands-75155.herokuapp.com/api/auth/`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(loggedInUser)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          loggedIn: true,
          userId: res.id,
          userLastName: res.lastName,
          userFirstName: res.firstName
        });
        this.fetchTours();
      })
      .catch(err => {
        console.error({ err });
      });
  };

  handleSignOut = () => {
    tokenService.remove();
    this.setState({
      loggedIn: false,
      userId: "",
      userLastName: "",
      userFirstName: ""
    });
    this.fetchTours();
  };

  handleTourSearch = searchInfo => {
    const searchCity = searchInfo.city;
    const searchState = searchInfo.state;
    const searchStr = `${searchCity}, ${searchState}`;
    this.setState({ searchLocation: searchStr.toUpperCase() });

    fetch(`https://pacific-sands-75155.herokuapp.com/api/search/tours`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(searchInfo)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ searchResults: res });
      })
      .catch(err => {
        console.error({ err });
      });
  };

  handleBooking = bookingInfo => {
    const userId = this.state.userId;
    const guideId = bookingInfo.guide_id;
    const tourId = bookingInfo.tour_id;
    const tourName = bookingInfo.tour_name;
    const check_in = format(new Date(bookingInfo.startDate._d), "dd MMM yyyy");
    const check_out = format(new Date(bookingInfo.endDate._d), "dd MMM yyyy");
    const bookingToBePosted = {
      tour_id: tourId,
      tour_name: tourName,
      user_id: userId,
      guide_id: guideId,
      checkin: check_in,
      checkout: check_out
    };

    fetch(`https://pacific-sands-75155.herokuapp.com/api/bookings`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(bookingToBePosted)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        this.fetchTours();
      })
      .catch(err => {
        console.error({ err });
      });
  };

  deleteTour = tourId => {
    const options = {
      method: "Delete",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    };

    fetch(
      `https://pacific-sands-75155.herokuapp.com/api/tours/${tourId}`,
      options
    )
      .then(res => {
        this.setState({ tours: this.state.tours.filter(n => n.id !== tourId) });
      })
      .catch(err => {
        this.setState({ tours: this.props.store.tours });
      });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  signUp = userInfo => {
    const newUser = {
      username: userInfo.userName,
      f_name: userInfo.f_name,
      l_name: userInfo.l_name,
      email: userInfo.email,
      password: userInfo.password
    };
    fetch(`https://pacific-sands-75155.herokuapp.com/api/users`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newUser)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        const user = {
          user_name: res.username,
          email: res.email,
          password: res.password
        };
        this.logIn(user);
        this.fetchTours();
      })
      .catch(err => {
        Swal.fire(err.error.message);
      });
  };

  logIn = userInfo => {
    const user = {
      username: userInfo.user_name,
      email: userInfo.email,
      password: userInfo.password
    };
    fetch(`https://pacific-sands-75155.herokuapp.com/api/auth/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .then(res => {
        tokenService.create(res.token);
        tokenService.storeUser(res.username);
        this.setState({
          userId: res.id,
          userName: res.username,
          userEmail: res.email,
          loggedIn: true
        });
        this.fetchTours();
      })
      .catch(err => {
        Swal.fire(err.error.message);
      });
  };

  postTour = tourInfo => {
    const newTour = {
      name: tourInfo.name.toUpperCase(),
      city: tourInfo.city.toUpperCase(),
      state: tourInfo.state.toUpperCase(),
      description: tourInfo.description,
      max_tourists: tourInfo.max_tourists,
      img: tourInfo.img,
      policies: tourInfo.policies,
      guide_id: this.state.userId,
      guide_username: this.state.userName,
      guide_email: this.state.userEmail
    };
    fetch(`https://pacific-sands-75155.herokuapp.com/api/tours`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newTour)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        this.fetchTours();
      })
      .catch(err => {
        console.error({ err });
      });
  };

  fetchTours = () => {
    fetch(`https://pacific-sands-75155.herokuapp.com/api/tours`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ tours: res });
      })
      .catch(err => {
        this.setState({ tours: this.props.tours });
      });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop />;
    }

    const contextValue = {
      loggedIn: this.state.loggedIn,
      signUp: this.signUp,
      logIn: this.logIn,
      postTour: this.postTour,
      tours: this.state.tours,
      drawerToggleClickHandler: this.drawerToggleClickHandler,
      backDropClickHandler: this.backDropClickHandler,
      deleteTour: this.deleteTour,
      userName: this.state.userName,
      userFirstName: this.state.userFirstName,
      userLastName: this.state.userLastName,
      handleTourSearch: this.handleTourSearch,
      searchResults: this.state.searchResults,
      searchLocation: this.state.searchLocation,
      handleSignOut: this.handleSignOut,
      handleProfileLink: this.handleProfileLink,
      handleBooking: this.handleBooking
    };
    return (
      <div style={{ height: "100%" }}>
        <toursAndUserContext.Provider value={contextValue}>
          <NavBar />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <MainPage />
          <Footer />
        </toursAndUserContext.Provider>
      </div>
    );
  }
}

export default App;
