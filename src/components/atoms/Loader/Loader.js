import React from 'react';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <span>Analyzing Results...</span>
        </div>
    )
}

export default Loader;
