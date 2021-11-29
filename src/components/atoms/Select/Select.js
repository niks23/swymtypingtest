import React, { useContext } from 'react';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import './Select.scss';

export const Select = ({ options }) => {
    const context = useContext(TypingTestContext);

    return (
        <select value={context.time} onChange={context.setTimer}>
            {options.map(({ value, label }) => {
                return <option value={value} key={value}>{label}</option>
            })}
        </select>
    )
}
