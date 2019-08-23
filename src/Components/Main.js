import React, { Component } from 'react';
import './Main.css';
import './sectionImages/swAnimate.css';
import { ReactComponent as Sw } from './sectionImages/sw.svg';
import { ReactComponent as FALogo } from './Logo/FALogo.svg';


class Main extends Component {

    render() {
        return (
            <div id="mainWrapper">
                
                <div id="imageWrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fractured-aperture.appspot.com/o/Profile_Photo%2FIMG_2344.jpg?alt=media&token=440b713e-929e-46d3-bf2f-52d7cabc4a4a" alt="Profile Photos: Credits to Johnlemuel Casilag" id="profileImage" />
                </div>

                <div id="aboutWrapper">
                    <p id="aboutDescription">Hello! My name is Rashad Balashov.<br />I am a Computer Science and 
                    Financial Economics double major at the University of Maryland, Baltimore County. I built this website 
                    as a space dedicated to sharing my projects, photography, and more. I hope you enjoy!</p>
                </div>
                
                <p className="sectionName">Education</p>
                    <div className="sectionItem">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fractured-aperture.appspot.com/o/Section_Icons%2Fumbc.png?alt=media&token=9c857cf2-3453-4408-9532-af386c8077f5" alt="UMBC" className="itemImage" />
                        <div className="itemInformation">                        
                            <p className="itemTitle">University of Maryland, Baltimore County</p>
                            <p className="itemDetails">Computer Science, Financial Economics<br />2016-2020</p>
                        </div>
                    </div>

                <p className="sectionName">Experience</p>
                    <div className="sectionItem">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fractured-aperture.appspot.com/o/Section_Icons%2Fey.png?alt=media&token=7324bd92-36ea-4970-81f4-14c29b834fd9" alt="Ernst & Young" className="itemImage" />
                        <div className="itemInformation">
                            <p className="itemTitle">Ernst & Young</p>
                            <p className="itemDetails">IT Advisory Intern<br />June 2019 - August 2019</p>
                        </div>
                    </div>
                    <br />
                    <div className="sectionItem">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fractured-aperture.appspot.com/o/Section_Icons%2Floc.png?alt=media&token=898d9598-5097-44c8-bc18-afb1036c2f6a" alt="Library of Congress" className="itemImage" />
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
                    <br />
                    <div className="sectionItem">
                        <FALogo />
                        <div className="itemInformation">
                            <p className="itemTitle">FracturedAperture</p>
                            <p className="itemDetails">Built using ReactJS<br />A website to share photos, videos, projects, and my thoughts</p>
                        </div>
                    </div>
                <p className="sectionName">Contact Me</p>


            </div>
        )
    }
}

export default Main;