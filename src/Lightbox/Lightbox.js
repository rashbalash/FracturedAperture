import React, { Component } from 'react';
import './Lightbox.css'

class Lightbox extends Component {
    
    render() {
        return (
            <div id="lightbox_container">
                <img src={ this.props.photos[this.props.activePhotoIndex] } alt="lightboxImage" />
            </div>
        );
    }
}

export default Lightbox;