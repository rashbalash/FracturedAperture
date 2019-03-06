// React Imports
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Page Imports
// import Videos from './Components/Main';
// import Photos from './Components/Main';
import Main from './Components/Main';
// import Projects from './Components/Main';
// import Blog from './Components/Main';

// Constant Imports
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="mainTitle">
            <p id="title">Fractured Aperture</p>
          </div>

          <Navigation />
          {/* <Route path="/Videos" component={Videos} /> */}
          {/* <Route path="/Photos" component={Photos} /> */}
          <Route exact path="/" component={Main} />
          {/* <Route path="/Projects" component={Projects} /> */}
          {/* <Route path="/Blog" component={Blog} /> */}

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
