import React from 'react';
import NavBar from './components/nav/Nav'
import Mainpage from './components/mainpage/Mainpage'
import toursAndUserContext from './context/toursAndUserContext';
import './App.css'

class App extends React.Component {
  state = {
    loggedIn: false,
    tours: []
  };

  // Add user when sign up button is clicked 
  signUp = userInfo => {
    const newUser = {
      f_name: userInfo.f_name,
      l_name: userInfo.l_name,
      email: userInfo.email,
      password: userInfo.password,
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
        console.log("newUser", newUser.id)
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

  postTour = tourInfo => {
    const newTour = {
      name: tourInfo.name,
      city: tourInfo.city,
      state: tourInfo.state,
      description: tourInfo.description,
      max_tourists: tourInfo.max_tourists,
      img: tourInfo.img,
      policies: tourInfo.policies,
      guide_username: tourInfo.guide_username,
    }
 console.log(newTour)
    // Post note
    fetch(`http://localhost:8000/api/tours`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newTour)
    })
      .then(res => {
        console.log("newUser", newTour.id)
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

  fetchTours = () => {
    // const options = {
    //   method: "Get",
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //   })
    // };

    fetch(`http://localhost:8000/api/tours`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ tours: res });
      })
      .catch(err => {
        this.setState({ tours: this.props.tours});
      });
  };

  componentDidMount() {
    this.fetchTours();
  }

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      signUp: this.signUp,
      logIn: this.logIn,
      postTour: this.postTour,
      tours: this.state.tours
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
