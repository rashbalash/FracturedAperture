// React Imports
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Page Imports
// import Videos from "./Components/Videos/Videos";
// import Photos from "./Components/Photos/Photos";
import Main from "./Components/Main/Main";
// import Projects from "./Components/Projects/Projects";
// import Blog from "./Components/Blog/Blog";

// Social Media Icons
// import { ReactComponent as Gmail } from "./social_icons/gmail.svg";
import { ReactComponent as Instagram } from "./social_icons/instagram.svg";
import { ReactComponent as Linkedin } from "./social_icons/linkedin.svg";
import { ReactComponent as Youtube } from "./social_icons/youtube.svg";

// Constant Imports
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import "./App.css";
// import Post, { blogPostType, projectPostType } from "./Components/Post/Post";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <div id="mainTitle">
              <p id="title">Rashad Balashov</p>
            </div>

            <Navigation />
            {/* <Route path="/Videos" component={Videos} />
            <Route path="/Photos" component={Photos} /> */}
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Blogs" component={Blog} /> */}

            {/* <Route
              path="/Projects/:id"
              component={({ match }) => (
                <Post postType={projectPostType} id={match.params.id} />
              )}
            />
            <Route
              path="/Blogs/:id"
              component={({ match }) => (
                <Post postType={blogPostType} id={match.params.id} />
              )}
            /> */}
          </div>
        </BrowserRouter>
        <div id="socialIconWrapper">
          {/* <a
            className="socialIconA"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:Rashad.Balashov@gmail.com"
          >
            <Gmail />
          </a> */}
          <a
            className="socialIconA"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/user/Rmab95/"
          >
            <Youtube />
          </a>
          <a
            className="socialIconA"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rashadbalashov/"
          >
            <Linkedin />
          </a>
          <a
            className="socialIconA"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/fracturedaperture/"
          >
            <Instagram />
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
