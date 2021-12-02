import React, { useContext, useState } from 'react'
import { data } from '../../../data';
import { TypingTestContext } from '../../../pages/HomePage/HomePage';
import Loader from '../../atoms/Loader/Loader';
import Character from '../../atoms/Character/Character';
import './TypingTest.scss';
import Textarea from '../../atoms/Textarea/Textarea';

function shuffle() {
    const wordsArr = data.split(' ');

    for (let i = wordsArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
    }

    return wordsArr;
}

const getCharacters = (words) => {
    const dataArr = [];

    for (let i = 0; i < words.length; i++) {
        dataArr.push(words[i]);
    }

    return dataArr;
}

export const words = shuffle().join(' ');
const characters = getCharacters(words);

export const TypingTest = () => {
    const context = useContext(TypingTestContext);
    // const [userInput, setUserInput] = useState('');
    const [loader, setLoader] = useState(false);

    // const updateReport = () => {
    //     const finalUserInput = userInput.split(' ');
    //     const dataArr = words.split(' ');

    //     for (let i = 0; i < dataArr.length; i++) {
    //         if (dataArr[i] === finalUserInput[i]) {
    //             context.setScore(prevScore => prevScore + 10);
    //             context.setCorrectWordArr(arr => [...arr, dataArr[i]])
    //         } else {
    //             console.log('ENtered');
    //             context.setIncorrectWordArr(arr => [...arr, dataArr[i]])
    //             context.setScore(prevScore => prevScore - 5)
    //         }
    //     }

    // }

    const inputChangeHandler = (value) => {
        context.setUserInput(value);

        for (let i = 0; i < words.length; i++) {
            const checkChar = value[i] ? value[i] === words[i] : null;
            context.setCharArr(data => {
                const newData = [...data];
                newData[i] = checkChar;
                return newData;
            });
        }

        let checker = arr => arr.every(item => item === true || item === false);
        if (context.charArr.length > 0 && checker(context.charArr)) {
            setLoader(true);

            if (context.userInput.length === words.length) {

                context.updateReport(words);
            }

            setTimeout(() => {
                setLoader(false);
                context.setUserInput('');
                context.setStep(3);
            }, 500)
        }
    }

    return (
        <div className="typing-test">
            <p>
                {characters.map((word, index) => {
                    return (
                        <Character
                            text={word}
                            key={index}
                            correct={context.charArr[index]}
                        />
                    )
                })}
            </p>
            <Textarea
                value={context.userInput}
                changeHandler={(e) =>
                    inputChangeHandler(e.target.value)
                }
                maxlength={words.length + 1}
            />
            {loader && <Loader />}
        </div>
    )
}
