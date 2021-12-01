import React from 'react';
import './Character.scss';

const Character = ({ text, correct }) => {
    if (correct === true) {
        return <span className="correct">{text}</span>
    }

    if (correct === false) {
        return <span className="incorrect">{text}</span>
    }

    return <span>{text ? text : ' '}</span>
}

export default Character;