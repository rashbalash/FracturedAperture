import React, { Component } from 'react';
import { db } from '../Config/firebaseConfig';

import './Blog.css';

class Blog extends Component {
    
    state = {
        posts: [],
    }

    componentDidMount = () => {
        this.retrieveBlog();
    }

    retrieveBlog = () => {
        return db.collection("BlogPosts").get().then((snapshot) => {
            const posts = [];
            snapshot.forEach(post => {
                posts.push({...post.data(), id: post.id });
            });
            this.setState({posts});
        });
    }

    render() {
        return (
            <div id="blogPostContainer">
                <br />
                {this.state.posts.map( (post) => (
                    <div className="postLinkContainer">
                        <img className="blogPostImage" src={ post.titlePhoto } alt="blogImage" />
                        <div className="blogPostDetails">
                            <p className="blogPostTitle">
                                <a className="blogPostLink" href={ `/Blogs/${post.id}` }>{ post.title }</a>
                            </p>
                            <p className="blogPostShortDescription">
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

export default Blog;