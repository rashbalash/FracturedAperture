import React, { Component } from 'react';
import { db } from "../Config/firebaseConfig";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './Photos.css';

class Photos extends Component {
    
    state = {
        photos: [],
        activePhotoIndex: null,
        isLightboxOpen: false
    };

    componentDidMount = () => {
        this.getImageLinks();
    }

    getImageLinks = () => {
        return db.collection("PhotoURLS").get().then((snapshot) => {
            const photos = [];
            snapshot.forEach(photo => {
                photos.push({src: photo.data().url, width: photo.data().width, height: photo.data().height});
            });
            this.setState({photos});
        });
    }

    displayImage = (url) => {        
        return (
            <div className="image_container">
                <img className="gallery_image" src={ url } alt="altText" key={ url } />
            </div>
        )
    }

    toggleModal = (e, photoArg) => {
        this.setState(state => ({ isLightboxOpen: !this.state.isLightboxOpen, activePhotoIndex: photoArg ? photoArg.index : 0 }));
    }

    render() {
        return (
            <div id="gallery_container">
                <br />

                <Gallery photos={ this.state.photos } onClick={ this.toggleModal } />

                <ModalGateway>
                    { this.state.isLightboxOpen ? (
                        <Modal onClose={ this.toggleModal }>
                            <Carousel 
                                currentIndex={ this.state.activePhotoIndex } 
                                views={ this.state.photos } />
                        </Modal>
                    ) : null }
                </ModalGateway>
                
                <br />
            </div>
        )
    }
}

export default Photos;