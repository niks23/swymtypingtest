import React from 'react'
import { useContext } from 'react';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import Button from '../../atoms/Button/Button';
import './FinalReport.scss';

const FinalReport = () => {
    const context = useContext(TypingTestContext);
    const wordPerMinutes = context.correctWordArr.length || 0 + context.incorrectWordArr.length || 0;
    const typos = context.incorrectWordArr.length || 0;

    const getAccuracy = () => {
        if (context.charArr.length > 0) {
            const correctWords = context.correctWordArr.length || 0;
            const totalWords = wordPerMinutes;
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