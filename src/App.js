import React, { Component } from 'react';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="mainTitle">
          <p id="title">Fractured Aperture</p>
        </div>

        <div id="navigation">

        </div>


        <div id ="mainPage">
          <Main />
        </div>

      </div>
    );
  }
}

export default App;
