import React from 'react'
import { useContext } from 'react';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import Button from '../../atoms/Button/Button';
import './FinalReport.scss';

const FinalReport = () => {
    const context = useContext(TypingTestContext);
    const wordPerMinutes = context.wordArr.length;
    const typos = context.wordArr.filter(item => item === false).length;

    const getAccuracy = () => {
        if (context.wordArr.length > 0) {
            const correctWords = context.wordArr.filter(item => item === true).length;
            const totalWords = context.wordArr.length;
            const accuracy = ((correctWords / totalWords) * 100).toFixed(2);
            return accuracy;
        } else {
            return 0;
        }
    }

    return (
        <div className="finalreport">
            <div className="report">
                <span>WPM: <strong>{wordPerMinutes}</strong></span>
                <span>Typos: <strong>{typos}</strong></span>
                <span>Score: <strong>{context.score}</strong></span>
                <span>Accuracy: <strong>{getAccuracy()}%</strong></span>
            </div>
            <Button>Restart</Button>
        </div>
    )
}

export default FinalReport;