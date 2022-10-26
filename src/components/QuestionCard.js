import React, { useState, useEffect } from 'react';
import Answer from  './Answer';

function QuestionCard( {handleScore, questionArray, setGameOver} ) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [x, setX] = useState(1)
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)

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

    function handleClick(event) {
        increaseX()
        console.log(event)
        if(event === question.correct_answer) {
            setCorrect((prev) => !prev)
            handleScore()
        } else {
            setWrong((prev) => !prev)
        }
    }
    
    const questionAnswers = answers.map((answer) => {
        return (
            <button onClick={() => setTimeout(() => handleClick(answer), 2000)} value={answer}>{answer}</button>
            // && setCorrect((prev) => !prev) && setWrong((prev) => !prev)
        )
    })

    function increaseX() {
        setX(x + 1)
        // setX(Math.floor(Math.random() * 50))
    }

    const nextQuestion = <button onClick={increaseX}>Next Question</button>

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
                {nextQuestion}
            </div>
            <div>
                <Answer setWrong={wrong} setCorrect={correct} answers={questionAnswers} />
            </div>
        </div>
    )
}

export default QuestionCard;