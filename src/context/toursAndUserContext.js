import React from "react";

const toursAndUserContext = React.createContext({
  signUp: () => {},
  logIn: () => {},
  postTour: () => {},
  tours: []
});

export default toursAndUserContext;
