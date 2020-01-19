import React from 'react';
import NavBar from './components/nav/Nav'
import Mainpage from './components/mainpage/Mainpage'
import toursAndUserContext from './context/toursAndUserContext';
import './App.css'

class App extends React.Component {
  state = {
    loggedIn: false
  };

  // Add user when sign up button is clicked 
  signUp = userInfo => {
    const newUser = {
      f_name: userInfo.f_name,
      l_name: userInfo.l_name,
      email: userInfo.email,
      password: userInfo.password,
      confirm_password: userInfo.confirmPassword
    }
 console.log(newUser)
    // Post note
    fetch(`http://localhost:8000/api/users`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newUser)
    })
      .then(res => {
        console.log("newUser folder_id", newUser.id)
        console.log("added user", res)
        if(!res.ok){
          return res.json().then(e => Promise.reject(e))
        } 
        // this.fetchNotes();
      })
      .catch(err => {
        console.error({err})
      });
  };

  logIn = userInfo => {
    const newUser = {
      email: userInfo.email,
      password: userInfo.password,
    }
 console.log(newUser)
  }

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      signUp: this.signUp,
      logIn: this.logIn,
      tours: this.props.tours
    };
    return (
      <div>
        <toursAndUserContext.Provider value={contextValue}>
          <NavBar />
          <Mainpage />
        </toursAndUserContext.Provider>
      </div>
    );
  }
}

export default App;
