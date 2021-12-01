import React from 'react';
import './Textarea.scss';
import './Textarea.scss';

const Textarea = ({ value, maxlength, changeHandler }) => {
    return (
        <textarea
            value={value}
            maxLength={maxlength}
            onChange={changeHandler}
            placeholder="Start Typing..."
        ></textarea>
    )
}

export default Textarea;