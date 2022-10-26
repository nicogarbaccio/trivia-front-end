import React, { useState, useEffect } from 'react';

function QuestionCard( {handleScore, questionArray, setGameOver} ) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [x, setX] = useState(1)
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(1)

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
        if(event === question.correct_answer) {
            handleScore()
            setCorrect((prev) => !prev)
        } else {
            setWrong((prev) => !prev)
        }
    }
    
    const questionAnswers = answers.map((answer) => {
        return (
            // <button onClick={() => setTimeout(() => handleClick(answer), 2000)} value={answer}>{answer}</button>
            <button onClick={() => handleClick(answer)} value={answer}>{answer}</button>
        )
    })

    function increaseX() {
        setQuestionNumber(questionNumber + 1)
        setX(x + 1)
        // setX(Math.floor(Math.random() * questionAnswers.length))
    }

    const nextQuestion = <button onClick={increaseX}>Next Question</button>

    if (questionNumber > 21) {
        setGameOver(true)
    }

    function endGame() {
        setGameOver(true)
    }

    const gameOverButton = <button onClick={endGame}>End game</button>

    return (
        <div>
            <div>
                <h1>Question #{questionNumber}</h1>
                {question.question}
            </div>
            <div>
                {questionAnswers}
                {nextQuestion}
                {gameOverButton}
            </div>
            <div>
                {wrong ? <p>Sorry, nope!</p> : null}
                {correct ? <p>Correct!</p> : null}
            </div>
        </div>
    )
}

export default QuestionCard;