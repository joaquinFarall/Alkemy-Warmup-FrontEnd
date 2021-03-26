import React, { useState, useEffect } from 'react';
import PostHome from './PostHome';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [deleted, setDeleted] = useState(false);

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
            .catch(err => console.log(err))
    }

    const deletePost = (id) => {
        setDeleted(false);

        if (window.confirm('Are you sure you want to delete this post?')) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.scrollTo(0, 0);
                    setDeleted(true);
                    // not necessary in this challenge because nothing it's actually being deleted 
                    getPosts('https://jsonplaceholder.typicode.com/posts/');
                })
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container mb-5">
            {
                deleted ?
                    <div className="alert alert-success alert-dismissible fade show text-center mt-4 m-auto w-50" role="alert">
                        Post deleted succesfully
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    :
                    null
            }

            <div className="row justify-content-center">
                {
                    posts.map(post => {
                        return (
                            <div className="col-10" key={post.id}>
                                <PostHome title={post.title} id={post.id} delete={deletePost} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}