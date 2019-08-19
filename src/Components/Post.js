import React, { Component } from "react";
import { db } from "../Config/firebaseConfig";
import ReactMarkdown from "react-markdown";
import './Post.css';

export const projectPostType = "ProjectPosts";
export const blogPostType = "BlogPosts";

class Post extends Component {

    state = {
        post: undefined
    }

    componentDidMount = () => {
        this.retrievePosts();
    }

    retrievePosts = () => {
        return db.collection(this.props.postType).doc(this.props.id).get().then((doc) => {

            const data = doc.data();

            this.setState({ post: { ...data, content: data.content.replace(/\$%\^/g, '\n') } });
            
        });
    }

    render() {

        if (this.state.post === undefined) {
            return (null);
        } 

        const {title, titlePicture, content, publishDate} = this.state.post;

        const date = new Date(0);
        date.setUTCSeconds(publishDate.seconds);


        return (
            <div className="postContainer">
                <h2>{ title }</h2>
                <p>{ date.toDateString() }</p>
                <img src={titlePicture} alt="title" />
                <ReactMarkdown source={content} />

            </div>
        );
    }
}

export default Post;