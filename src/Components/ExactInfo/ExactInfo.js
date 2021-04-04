import React from 'react';
import { Link } from 'react-router-dom';

const ExactInfo = (props) => {
    const { id, name, title } = props.data;
    return (
        <div className="ps-5 mt-5">
            <h1>{name}</h1>
            <p>{title}</p>
            <Link to={`book/${id}`}>
                <button className="btn btn-primary">Book Now</button>
            </Link>
        </div>
    );
};

export default ExactInfo;