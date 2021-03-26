import React from 'react';
import { Link } from 'react-router-dom';

export default function PostHome(props) {
    return (
        <div className="card mt-5 m-auto text-center home-post">
            <div className="card-header bg-info text-light p-3"></div>
            <div className="card-body">
                <Link to={'/posts/' + props.id}>
                    <h3 className="card-title pt-4 pb-4 text-info">{props.title}</h3>
                </Link>
                <Link to={'/posts/edit/' + props.id}>
                    <button className="btn btn-info btn-action text-light w-25 m-2">EDIT POST</button>
                </Link>
                <button className="btn btn-secondary btn-action text-light w-25" onClick={() => props.delete(props.id)}>DELETE POST</button>
            </div>
        </div>
    );
}
