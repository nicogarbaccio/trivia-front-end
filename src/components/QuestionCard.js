import React, { useState, useEffect } from 'react';

function QuestionCard( {handleScore, questionArray, setGameOver} ) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [start, setStart] = useState(false)
    const [x, setX] = useState(1)
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)

    function handleStart() {
        setStart(true)
        setX(x + 1)
    }

    useEffect(() => {
        setWrong(false)
        setCorrect(false)
        fetch(`http://localhost:9292/questions/${x}`)
        .then(res => res.json())
        .then(data => {
            setAnswers([data.incorrect_answer_1, data.incorrect_answer_2, data.incorrect_answer_3, data.correct_answer])
            setQuestion(data)
        })
    }, [x])

    function handleWrong() {
        return (
            <p>Sorry, nope!</p>
        )
    }

    function handleClick(event) {
        handleStart()
        if(event.target.value === question.correct_answer) {
            handleScore()
        }     // setX(x + 1)
       
    }
    
    const questionAnswers = answers.map((answer) => {
        return (
            <button onClick={() => setTimeout(handleClick, 3000) && console.log((e) => e.target.value) } value={answer}>{answer}</button>
        )
    })

    function increaseX() {
        setX(x + 1)

    }

    const button = <button onClick={increaseX}>Next Question</button>

    if (x > 10) {
        setGameOver(true)
    }

    return (
        <div>
            <div>
                {question.question}
            </div>
            <div>
                {questionAnswers}
                {start ? null : button}
            </div>
            {wrong ? <p>Sorry, nope!</p> : null}
            {correct ? <p>Correct!</p> : null}
        </div>
    )
}

export default QuestionCard;