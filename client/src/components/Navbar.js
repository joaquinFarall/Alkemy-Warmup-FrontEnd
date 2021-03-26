import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <Link to='/'>
                    <span className="navbar-brand">Front-end Challenge</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to='/posts/new'>
                            <li className="nav-item">
                                <span className="nav-link active">New Post</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
