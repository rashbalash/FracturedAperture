import React, { Component } from 'react';
import Profile from './profile/IMG_2344.jpg';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <img src={ Profile } alt="Profile" id="profileImage" />

                <p id="aboutDescription">Hello, my name is Rashad Balashov.</p>
            </div>
        )
    }
}

export default Main;