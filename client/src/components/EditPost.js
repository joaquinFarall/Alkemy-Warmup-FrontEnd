import React, { useState, useEffect } from 'react';
import '../App.css';

function EditPost() {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');
    const [messageState, setMessageState] = useState('');

    const getPost = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data);
                setTitle(data.title);
                setBody(data.body);
            })
            .catch(err => console.log(err));
    };

    const editPost = (id) => {
        if (title && body) {
            const post = {
                title,
                body
            };

            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMessage('Post updated successfully');
                    setMessageState('success');
                })
                .catch(err => console.log(err));
        } else {
            setMessage('The title and content of the post cannot be empty');
            setMessageState('danger');
        }
    };

    useEffect(() => {
        const url = window.location.pathname;
        const id = url.substring(url.lastIndexOf('/') + 1);
        getPost(id);
    }, []);

    return (
        <>
            {   post.id ?
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {
                                message ?
                                    <div className={`alert alert-${messageState} alert-dismissible fade show text-center mt-4 m-auto w-50`} role="alert">
                                        {message}
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        <div className="col-lg-6 col-md-8 form-container p-4 mt-4 m-auto">
                            <div>
                                <h1 className="text-center p-2 text-info">Edit Post</h1>
                                <div className="input-group mb-3 mt-4">
                                    <input name="title" onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Your post's title" value={title} required />
                                </div>
                                <div className="input-group mb-3">
                                    <textarea name="body" onChange={(e) => setBody(e.target.value)} className="form-control w-100" rows="5" placeholder="Your post's content" value={body} required></textarea>
                                </div>
                                <div className="input-group d-grid gap-2">
                                    <button className="btn btn-info text-light" onClick={() => editPost(post.id)}>Update Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="alert alert-primary text-center mt-4 m-auto w-50" role="alert">
                    <h3>The post you are looking for does not exists</h3>
                </div>
            }
        </>
    );
}

export default EditPost;