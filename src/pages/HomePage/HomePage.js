import React, { createContext, useState } from 'react'
import Timer from '../../components/atoms/Timer/Timer';
import FinalReport from '../../components/molecules/FinalReport/FinalReport';
import { TypingTest } from '../../components/molecules/TypingTest/TypingTest';
import TestTimer from '../../components/molecules/TypingTimer/TestTimer';
import './HomePage.scss';

export const TypingTestContext = createContext();

export const HomePage = () => {
    const [time, setTime] = useState(1);
    const [step, setStep] = useState(1);
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [wordArr, setWordArr] = useState([]);
    const [score, setScore] = useState(0);

    const setTimer = (e) => {
        setTime(e.target.value);
    }

    const clickHandler = () => {
        if (step === 1) {
            setStep(2);
        }

        if (step === 3) {
            setStep(1);
            setTime(1);
            setWordArr([]);
            setActiveWordIndex(0);
        }
    }

    const renderComponent = (step) => {
        switch (step) {
            case 1:
                return <TestTimer />
            case 2:
                return <TypingTest />
            case 3:
                return <FinalReport />
            default:
                return <TestTimer />
        }
    }

    return (
        <TypingTestContext.Provider
            value={{
                time,
                activeWordIndex,
                wordArr,
                score,
                setTimer,
                clickHandler,
                setActiveWordIndex,
                setWordArr,
                setScore,
                setStep,
            }}
        >
            <div className="container">
                <h1>Typing Test</h1>
                <div className="content-wrapper">
                    {step === 2 && <Timer />}
                    {renderComponent(step)}
                </div>
            </div>
        </TypingTestContext.Provider >
    )
}
