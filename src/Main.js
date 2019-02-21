import React, { Component } from 'react';
import Profile from './profile/IMG_2344.jpg';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div id="mainWrapper">
                <img src={ Profile } alt="Profile" id="profileImage" />

                <p id="aboutDescription">Hello!<br />My name is Rashad Balashov.<br />I am a Computer Science and 
                Financial Economics major at the University of Maryland, Baltimore County. I built this website 
                as a space dedicated to sharing my projects, photography, and more. I hope you enjoy!</p>
            
                <p className="sectionName">Education</p>
                <p className="sectionName">Experience</p>
                <p className="sectionName">Projects</p>
                <p className="sectionName">Contact Me</p>

            </div>
        )
    }
}

export default Main;