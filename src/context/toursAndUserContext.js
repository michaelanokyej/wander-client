import React from "react";

const toursAndUserContext = React.createContext({
  signUp: () => {},
  logIn: () => {},
  tours: []
});

export default toursAndUserContext;
