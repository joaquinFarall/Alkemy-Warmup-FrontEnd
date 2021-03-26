import React, { useState } from 'react';
import '../App.css';

export default function NewPost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [created, setCreated] = useState(false);

    const createPost = (e) => {

        if (title && body) {
            const post = {
                title,
                body,
                userId: 1
            };

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setTitle('');
                    setBody('');
                    setCreated(true);
                })
                .catch(err => console.log(err));

            e.preventDefault();
        }

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    {
                        created ?
                            <div className="alert alert-success alert-dismissible fade show text-center mt-4 m-auto w-50" role="alert">
                                Post created succesfully
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            :
                            null
                    }
                </div>
                <div className="col-lg-6 col-md-8 form-container p-4 mt-4">
                    <form method='POST'>
                        <h1 className="text-center p-2 text-info">New Post</h1>
                        <div className="input-group mb-3 mt-4">
                            <input name="title" onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Your post's title" value={title} required />
                        </div>
                        <div className="input-group mb-3">
                            <textarea name="body" onChange={(e) => setBody(e.target.value)} className="form-control w-100" rows="3" placeholder="Your post's content" value={body} required></textarea>
                        </div>
                        <div className="input-group d-grid gap-2">
                            <button className="btn btn-info text-light" onClick={createPost}>Create Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}