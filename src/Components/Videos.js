import React, { Component } from 'react';

import './Videos.css';

class Videos extends Component {

    state = {
        videos: [],
        activePhotoIndex: null,
        isLightboxOpen: false
    }

    render() {
        return (
            <div>
                <br />

                {/* <Gallery photos={ this.state.photos } onClick={ this.toggleModal } />

                <ModalGateway>
                    { this.state.isLightboxOpen ? (
                        <Modal onClose={ this.toggleModal }>
                            <Carousel 
                                currentIndex={ this.state.activePhotoIndex } 
                                views={ this.state.photos } />
                        </Modal>
                    ) : null }
                </ModalGateway> */}

                <br />
            </div>
        )
    }
}

export default Videos;