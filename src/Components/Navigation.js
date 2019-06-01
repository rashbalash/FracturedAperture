import React, { Component } from 'react';
import './Navigation.css';

// Logo
import { ReactComponent as FALogo } from './Logo/FALogo.svg';

class Navigation extends Component {

    displayNav = () => {
        return (
            <div id="navBar">
                <a className="navLink" href="/Videos">Videos</a>
                <a className="navLink" href="/Photos">Photos</a>
                <a className="navLink" href="/"><FALogo /></a>
                <a className="navLink" href="/Projects">Projects</a>
                <a className="navLink" href="/Blog">Blog</a>
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