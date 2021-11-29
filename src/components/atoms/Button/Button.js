import React, { useContext } from 'react'
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import './Button.scss';

const Button = ({ children }) => {
    const context = useContext(TypingTestContext);

    return <button type="button" onClick={context.clickHandler}>{children}</button>
}

export default Button;
