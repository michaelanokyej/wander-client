import React from "react";

const toursAndUserContext = React.createContext({
  signUp: () => {},
  logIn: () => {},
  postTour: () => {},
  tours: [],
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {},
  deleteTour: () => {},
  userName: "",
  loggedIn: "",
  userFirstName: "",
  userLastName: "",
  handleTourSearch: () => {},
  searchresults: [],
  searchLocation: ""
});

export default toursAndUserContext;
