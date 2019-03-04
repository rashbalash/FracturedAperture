import React, { Component } from 'react';
import Main from './Components/Main';
import './App.css';

class App extends Component {

  getYear = () => {
    var date = new Date().getFullYear(); 
    return <p id="copyright">Rashad Balashov &copy; { date }</p>
  }

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

        <div id="footer">
          <footer>{ this.getYear() }</footer>
        </div>

      </div>
    );
  }
}

export default App;
