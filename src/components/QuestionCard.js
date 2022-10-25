import React, { useState, useEffect } from 'react';

function QuestionCard( {handleScore, questionArray} ) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [start, setStart] = useState(false)
    const [x, setX] = useState(1)

    function handleStart() {
        setStart(true)
        setX(x + 1)
    }

    useEffect(() => {
        fetch(`http://localhost:9292/questions/${x}`)
        .then(res => res.json())
        .then(data => setQuestion(data))
        .then(() => {
            let incorrect_answer1 = question.incorrect_answer1.replaceAll('"', '')
            incorrect_answer1 = incorrect_answer1.replace('[','') 
            incorrect_answer1 = incorrect_answer1.replace(']','')
            incorrect_answer1 = incorrect_answer1.split(',')

            let incorrect_answer2 = question.incorrect_answer2.replaceAll('"', '')
            incorrect_answer2 = incorrect_answer2.replace('[','') 
            incorrect_answer2 = incorrect_answer2.replace(']','')
            incorrect_answer2 = incorrect_answer2.split(',')

            let incorrect_answer3 = question.incorrect_answer3.replaceAll('"', '')
            incorrect_answer3 = incorrect_answer3.replace('[','') 
            incorrect_answer3 = incorrect_answer3.replace(']','')
            incorrect_answer3 = incorrect_answer3.split(',')

            function getMultipleRandom(arr) {
                const shuffled = [...arr].sort(() => Math.floor(Math.random() * 100));
                return shuffled
            }

            let all_answers = [incorrect_answer1, incorrect_answer2, incorrect_answer3, question.correct_answer]
            all_answers = getMultipleRandom(all_answers)
            setAnswers(all_answers, questionArray)
        })
    }, )

    function handleWrong() {
        return (
            <p>Sorry, nope!</p>
        )
    }

    function handleClick(event) {
        handleStart()
        if(event.target.value === question.correct_answer) {
            handleScore()
            setX(x + 1)
        } else {
            handleWrong()
            setX(x + 1)
        }
    }
    
    const questionAnswers = answers.map((each) => {
        return (
            <button onClick={handleClick} value={each}>{each}</button>
        )
    })

    function increaseX() {
        setX(x + 1)
    }

    const button = <button onClick={increaseX}>Start</button>

    return (
        <div>
            <div>
                {question.question}
            </div>
            <div>
                {questionAnswers}
                {start ? null : button}
            </div>
        </div>
    )
}

export default QuestionCard;