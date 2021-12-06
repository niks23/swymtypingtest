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
    const [correctWordArr, setCorrectWordArr] = useState([]);
    const [incorrectWordArr, setIncorrectWordArr] = useState([]);
    const [score, setScore] = useState(0);
    const [charArr, setCharArr] = useState([]);

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
            setCharArr([]);
            setScore(0);
            setCorrectWordArr([]);
            setIncorrectWordArr([]);
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

    const [userInput, setUserInput] = useState('');

    const updateReport = (words) => {
        const finalUserInput = userInput.split(' ');
        const dataArr = words.split(' ');

        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i] === finalUserInput[i]) {
                setScore(prevScore => prevScore + 10);
                setCorrectWordArr(arr => [...arr, dataArr[i]])
            } else {
                setIncorrectWordArr(arr => [...arr, dataArr[i]])
                setScore(prevScore => prevScore - 5)
            }
        }
    }

    return (
        <TypingTestContext.Provider
            value={{
                time,
                charArr,
                score,
                correctWordArr,
                incorrectWordArr,
                userInput,
                setTimer,
                clickHandler,
                setCorrectWordArr,
                setIncorrectWordArr,
                setCharArr,
                setScore,
                setStep,
                setUserInput,
                updateReport
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
