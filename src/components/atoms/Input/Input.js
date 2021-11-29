import React from 'react';
import './Input.scss';
import './Input.scss';

const Input = ({ value, changeHandler }) => {
    return (
        <input type="text" value={value} onChange={changeHandler}></input>
    )
}

export default Input;