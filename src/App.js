import React from "react";
import NavBar from "./components/nav/Nav";
import Mainpage from "./components/mainpage/Mainpage";
import toursAndUserContext from "./components/context/toursAndUserContext";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";
import Footer from "./components/footer/Footer";
import { tokenService } from "./components/TokenService";
import "./App.css";

class App extends React.Component {
  state = {
    loggedIn: false,
    userId: "",
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

  // Create a componentDidMount function
  componentDidMount() {
    // console.log("component did mount email", this.state.userName)
    if (this.state.token !== null && this.state.userName !== null) {
      const loggedInUser = {
        userName: this.state.userName
      };
      //  console.log("user in login", user)
      // http://localhost:8000/api/auth/
      fetch(`https://pacific-sands-75155.herokuapp.com/api/auth/`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(loggedInUser)
      })
        .then(res => {
          // if(!res.ok){
          //   return res.json().then(e => Promise.reject(e))
          // }
          return res.json();
        })
        .then(res => {
          // console.log("token in state", this.state.token);
          // console.log("username in state", this.state.userName);
          this.setState({
            loggedIn: true,
            userId: res.id,
            userLastName: res.lastName,
            userFirstName: res.firstName
          });
          // console.log("token", this.state);

          this.fetchTours();
        })
        .catch(err => {
          console.error({ err });
        });
    } else {
      this.fetchTours();
    }
  }
  // tokenService check for already created token
  // if token is not null fetch user
  // Get api/me
  // Put user info in state

  handleTourSearch = searchInfo => {
    console.log("search params", searchInfo);
    const searchCity = searchInfo.city;
    const searchState = searchInfo.state;
    const searchStr = `${searchCity}, ${searchState}`;
    this.setState({ searchLocation: searchStr });

    

    fetch(`http://localhost:8000/api/search/tours`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(searchInfo)
    })
      .then(res => res.json())
      .then(res => {
        console.log("search results", res)
        this.setState({ searchResults: res });
      })
      .catch(err => {
        console.error({ err });
      });
  };

  // function to delete tours
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

  // handle toggle click
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  // Add user when sign up button is clicked
  signUp = userInfo => {
    const newUser = {
      f_name: userInfo.f_name,
      l_name: userInfo.l_name,
      email: userInfo.email,
      password: userInfo.password
    };
    // console.log(newUser);
    // Post note
    // http://localhost:8000/api/users
    fetch(`https://pacific-sands-75155.herokuapp.com/api/users`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newUser)
    })
      .then(res => {
        // if(!res.ok){
        //   return res.json().then(e => Promise.reject(e))
        // }
        return res.json();
      })
      .then(res => {
        // console.log("newUser", res.id)
        const user = {
          email: res.email,
          password: res.password
        };
        // console.log("user login info", user)
        this.logIn(user);
        this.fetchTours();
      })
      .catch(err => {
        console.error({ err });
      });
  };

  logIn = userInfo => {
    const user = {
      email: userInfo.email,
      password: userInfo.password
    };

    //  console.log("user in login", user)
    //  http://localhost:8000/api/auth/login
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
        this.setState({ userName: user.email, loggedIn: true });
        tokenService.storeUser(this.state.userName);

        this.fetchTours();
      })
      .catch(err => {
        console.error({ err });
      });
  };

  postTour = tourInfo => {
    const newTour = {
      name: tourInfo.name,
      city: tourInfo.city,
      state: tourInfo.state,
      description: tourInfo.description,
      max_tourists: tourInfo.max_tourists,
      img: tourInfo.img,
      policies: tourInfo.policies,
      guide_username: tourInfo.guide_username
    };
    //  console.log(newTour)
    // Post note
    fetch(`https://pacific-sands-75155.herokuapp.com/api/tours`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newTour)
    })
      .then(res => {
        // console.log("newUser", newTour.id)
        // console.log("added user", res)
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
    // const options = {
    //   method: "Get",
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //   })
    // };

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
      searchLocation: this.state.searchLocation
    };
    return (
      <div style={{ height: "100%" }}>
        <toursAndUserContext.Provider value={contextValue}>
          <NavBar />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <Mainpage />
          <Footer />
        </toursAndUserContext.Provider>
      </div>
    );
  }
}

export default App;
