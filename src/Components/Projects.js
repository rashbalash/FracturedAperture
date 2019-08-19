import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';
import { db } from '../Config/firebaseConfig';

import './Projects.css';

class Projects extends Component {

    state = {
        posts: [],
    }

    componentDidMount = () => {
        this.retrieveProject();
    }

    retrieveProject = () => {
        return db.collection("ProjectPosts").get().then((snapshot) => {
            const posts = [];
            snapshot.forEach(post => {
                posts.push({...post.data(), id: post.id });
            });
            this.setState({posts});
        });
    }

    render() {
        return (
            <div id="projectPostContainer">
                {this.state.posts.map( (post) => (
                    <div className="postLinkContainer">
                        <img className="projectPostImage" src={ post.titlePhoto } alt="projectImage" />
                        <div className="projectPostDetails">
                            <p className="projectPostTitle">
                                <a className="projectPostLink" href={ `/Projects/${post.id}` }>{ post.title }</a>
                            </p>
                            <p className="projectPostShortDescription">
                                { post.shortDescription }
                            </p>
                        </div>
                    </div>
                ))}
                <br />
            </div>
        )
    }
}

export default Projects;