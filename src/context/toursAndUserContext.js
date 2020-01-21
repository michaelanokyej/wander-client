import React from "react";

const toursAndUserContext = React.createContext({
  signUp: () => {},
  logIn: () => {},
  postTour: () => {},
  tours: [],
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {}
});

export default toursAndUserContext;
