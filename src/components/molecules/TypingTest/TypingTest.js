import React from 'react'
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development'
import { data } from '../../../data';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import Input from '../../atoms/Input/Input'
import Loader from '../../atoms/Loader/Loader';
import Word from '../../atoms/Word/Word';
import './TypingTest.scss';

function shuffle() {
    const wordsArr = data.split(' ');

    for (let i = wordsArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
    }

    return wordsArr;
}

const words = shuffle();

export const TypingTest = () => {
    const context = useContext(TypingTestContext);
    const [userInput, setUserInput] = useState('');
    const [loader, setLoader] = useState(false);

    const inputChangeHandler = (value) => {
        if (!context.wordArr.length) {
            console.log("HELLO");
            context.setStartTimer(true);
        }

        if (value.endsWith(' ')) {
            const word = value.trim();
            const checkWord = word === words[context.activeWordIndex];
            context.setActiveWordIndex(index => index + 1);

            context.setWordArr(data => {
                const newResult = [...data];
                newResult[context.activeWordIndex] = checkWord;
                return newResult;
            })

            checkWord
                ? context.setScore(prevScore => prevScore + 10)
                : context.setScore(prevScore => prevScore - 5)

            if (context.wordArr.length === words.length - 1) {
                setLoader(true);
                setTimeout(() => {
                    setLoader(false);
                    context.setStep(3);
                }, 300)
            }

            setUserInput(' ');
        } else {
            setUserInput(value);
        }
    }

    return (
        <div className="typing-test">
            <p>
                {words.map((word, index) => {
                    return (
                        <Word
                            text={word}
                            key={index}
                            active={index === context.activeWordIndex}
                            correct={context.wordArr[index]}
                        />
                    )
                })}
            </p>
            <Input value={userInput} changeHandler={(e) => inputChangeHandler(e.target.value)} />
            {loader && <Loader />}
        </div>
    )
}
