import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// Logo
import { ReactComponent as FALogo } from './Logo/FALogo.svg';

class Navigation extends Component {

    displayNav = () => {
        return (
            <div id="navBar">
                <Link to="/Videos" className="navLink">Videos</Link>
                <Link to="/Photos" className="navLink">Photos</Link>
                <Link to="/" className="navLink"><FALogo /></Link>
                <Link to="/Projects" className="navLink">Projects</Link>
                <Link to="/Blogs" className="navLink">Blog</Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.displayNav() }
            </div>
        );
    }
}

export default Navigation;