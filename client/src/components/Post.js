import React, { useState, useEffect } from 'react';
import '../App.css';

function Post(props) {
    const [post, setPost] = useState({});

    const getPost = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data);
            })
    };

    useEffect(() => {
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        getPost(id);
    }, []);

    return (
        <>
            {
                post.id ?
                    <div className="card mt-5 m-auto text-center w-75">
                        <div className="card-header bg-info text-light p-3"></div>
                        <div className="card-body p-3">
                            <h2 className="card-title pt-4 pb-4 text-info">{post.title}</h2>
                            <h4 className="p-4">{post.body}</h4>
                            <hr />
                            <span>Created by user with id: <strong>{post.userId}</strong></span>
                        </div>
                    </div>
                    : <div className="alert alert-primary text-center mt-4 m-auto w-50" role="alert">
                        <h3>The post you are looking for does not exists</h3>
                    </div>
            }
        </>
    );
}

export default Post;