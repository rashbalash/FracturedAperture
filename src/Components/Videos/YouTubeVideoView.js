import React, { Component } from 'react';
import './YouTubeVideoView.css';

class YouTubeVideoView extends Component {

    render() {
        return (
            <div className="iframeContainer">
                <iframe 
                    className="videoIframe"
                    title={this.props.data.youtubeid}
                    src={`https://www.youtube.com/embed/${ this.props.data.youtubeid }`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>       
                </iframe>
            </div>
        )
    }

}

export default YouTubeVideoView;