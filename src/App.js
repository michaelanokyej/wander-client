import React from 'react';
import NavBar from './components/nav/Nav'
import Mainpage from './components/mainpage/Mainpage'
import tourContext from './context/tourContext';

import './App.css'

class App extends React.Component {
  render() {
    const contextValue = {
      tours: this.props.tours
    }
    return (
      <div>
        <tourContext.Provider value={contextValue}>
          <NavBar />
          <Mainpage />
        </tourContext.Provider>
      </div>
    );
  }
}

export default App;
