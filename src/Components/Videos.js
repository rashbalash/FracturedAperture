import React, { Component } from 'react';
import { db } from "../Config/firebaseConfig";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import YouTubeVideoView from './YouTubeVideoView';

import './Videos.css';

class Videos extends Component {

    state = {
        videos: [],
        activeVideoIndex: null,
        isLightboxOpen: false
    }

    componentDidMount = () => {
        this.getVideoLinks();
    }

    getVideoLinks = () => {
        return db.collection("YouTubeURLS").get().then((snapshot) => {
            const videos = [];
            snapshot.forEach(video => {
                videos.push({src: `https://img.youtube.com/vi/${ video.data().uniqueID }/maxresdefault.jpg`, youtubeid: video.data().uniqueID, width: 4, height: 2.25});
            });
            this.setState({videos});
        });
    }

    toggleModal = (e, VideoArg) => {
        this.setState(state => ({ isLightboxOpen: !this.state.isLightboxOpen, activeVideoIndex: VideoArg ? VideoArg.index : 0 }));
    }


    render() {
        return (
            <div id="gallery_container">
                <br />

                <Gallery photos={ this.state.videos } onClick={ this.toggleModal } />

                <ModalGateway>
                    { this.state.isLightboxOpen ? (
                        <Modal onClose={ this.toggleModal }>
                            <Carousel 
                                components={{ View: YouTubeVideoView }}
                                currentIndex={ this.state.activeVideoIndex } 
                                views={ this.state.videos } />
                        </Modal>
                    ) : null }
                </ModalGateway>

                <br />
            </div>
        )
    }
}

export default Videos;