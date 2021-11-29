import React from 'react'
import Button from '../../atoms/Button/Button';
import { Select } from '../../atoms/Select/Select';
import './TestTimer.scss';

const options = [
    { value: '1', label: '1 Minute' },
    { value: '2', label: '2 Minute' },
    { value: '3', label: '3 Minute' },
    { value: '4', label: '4 Minute' },
    { value: '5', label: '5 Minute' }
]

const TestTimer = () => {
    return (
        <div className="test-timer">
            <Select options={options} />
            <Button>Start Test</Button>
        </div>
    )
}

export default TestTimer;