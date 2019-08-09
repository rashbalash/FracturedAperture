import React, { Component } from 'react';
import { firebase, db } from "../Config/firebaseConfig";

import './Photos.css';

class Photos extends Component {

    getImageLinks = () => {
        db.collection("PhotoURLS").get().then((snapshot) => {
            snapshot.forEach(photo => {
                console.log(photo.data().url)
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Photos</h1>

                {
                    this.getImageLinks()
                }

                <div>
                    
                </div>

            </div>
        )
    }
}

export default Photos;