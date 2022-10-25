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
            let all_answers = [question.incorrect_answer1, question.incorrect_answer2, question.incorrect_answer3, question.correct_answer]
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
            // setX(x + 1)
        } else {
            handleWrong()
            // setX(x + 1)
        }
    }
    
    const questionAnswers = answers.map((answer) => {
        return (
            <button onClick={handleClick} value={answer}>{answer}</button>
        )
    })

    function increaseX() {
        setX(x + 1)
    }

    const button = <button onClick={increaseX}>Next Question</button>

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