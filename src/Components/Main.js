import React, { Component } from 'react';
import Profile from './profile/IMG_2344.jpg';
import Umbc from './sectionImages/umbc.png';
import Ey from './sectionImages/ey.png';
import Loc from './sectionImages/loc.png';
import './Main.css';
import { ReactComponent as Sw } from './sectionImages/sw.svg';

class Main extends Component {

    render() {
        return (
            <div id="mainWrapper">
                
                <div id="imageWrapper">
                    <img src={ Profile } alt="Profile Photos: Credits to Johnlemuel Casilag" id="profileImage" />
                </div>

                <div id="aboutWrapper">
                    <p id="aboutDescription">Hello!<br />My name is Rashad Balashov.<br />I am a Computer Science and 
                    Financial Economics double major at the University of Maryland, Baltimore County. I built this website 
                    as a space dedicated to sharing my projects, photography, and more. I hope you enjoy!</p>
                </div>
                
                <p className="sectionName">Education</p>
                    <div className="sectionItem">
                        <img src={ Umbc } alt="UMBC" className="itemImage" />
                        <div className="itemInformation">                        
                            <p className="itemTitle">University of Maryland, Baltimore County</p>
                            <p className="itemDetails">Computer Science, Financial Economics<br />2016-2020</p>
                        </div>
                    </div>

                <p className="sectionName">Experience</p>
                    <div className="sectionItem">
                        <img src={ Ey } alt="Ernst & Young" className="itemImage" />
                        <div className="itemInformation">
                            <p className="itemTitle">Ernst & Young</p>
                            <p className="itemDetails">IT Advisory Intern<br />June 2019 - August 2019</p>
                        </div>
                    </div>
                    <br />
                    <div className="sectionItem">
                        <img src={ Loc } alt="Library of Congress" className="itemImage" />
                        <div className="itemInformation">
                            <p className="itemTitle">Library of Congress</p>
                            <p className="itemDetails">Volunteer Data Entry Analyst<br />June 2017 - August 2018</p>
                        </div>
                    </div>

                <p className="sectionName">Projects</p>
                    <div className="sectionItem">
                        <Sw />
                        <div className="itemInformation">
                            <p className="itemTitle"><a className="projectLink" href="https://simpliweather.com" target="_blank" rel="noopener noreferrer">SimpliWeather</a></p>
                            <p className="itemDetails">Built using ReactJS and OpenWeatherMap's API<br />A clean, responsive web app for checking the weather</p>
                        </div>
                    </div>

                <p className="sectionName">Contact Me</p>


            </div>
        )
    }
}

export default Main;