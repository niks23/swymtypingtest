import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import Loader from '../Loader/Loader';
import './Timer.scss';

const Timer = () => {
    const context = useContext(TypingTestContext);
    const initialSeconds = context.time * 60 % 60;
    const initialMinutues = Math.floor(context.time * 60 / 60);
    const [minutes, setMinutes] = useState(initialMinutues);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        let timerInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }

            if (minutes === 0 && seconds === 0) {
                setLoader(true);
                setTimeout(() => {
                    setLoader(false);
                    context.setStep(3);
                }, 300)
            }
        }, 1000)

        return () => {
            clearInterval(timerInterval);
        };
    });

    const getTimerData = () => {
        if (minutes === 0 && seconds === 0) {
            return <strong>Time Up!!!</strong>
        } else {
            return <strong> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</strong>
        }
    }

    return (
        <div className="timer">
            <span>Time Left: </span>
            {getTimerData()}
            {loader && <Loader />}
        </div >
    )
}

export default Timer;