import React, { Component } from 'react';
import { db } from "../Config/firebaseConfig";
import Lightbox from "../Lightbox/Lightbox";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './Photos.css';

class Photos extends Component {
    
    state = {
        photos: [],
        activePhotoIndex: null
    };

    componentDidMount = () => {
        this.getImageLinks();
    }

    getImageLinks = () => {
        return db.collection("PhotoURLS").get().then((snapshot) => {
            const photos = [];
            snapshot.forEach(photo => {
                photos.push({src: photo.data().url, width: 5.5, height: 3.4});
            });
            this.setState({photos});
        });
    }

    displayImage = (url) => {        
        return (
            <div className="gallery_container">
                <img className="gallery_image" src={ url } alt="altText" key={ url } />
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* {
                    this.state.photos.map(photo => 
                        this.displayImage(photo)
                    )
                } */}

                <Gallery photos={this.state.photos} />

                {
                    this.state.activePhotoIndex !== null && <Lightbox photos={this.state.photos} activePhotoIndex={this.state.activePhotoIndex} />
                }
                
                <button onClick={() => this.setState({ activePhotoIndex: 1 })}> label </button>

            </div>
        )
    }
}

export default Photos;