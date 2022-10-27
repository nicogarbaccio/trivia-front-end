import React, { useState, useEffect } from 'react';
import GameOver from './GameOver';

import Button from 'react-bootstrap/Button';

function QuestionCard( {user} ) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [x, setX] = useState(1)
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(1)
    const [gameOver, setGameOver] = useState(false)

    console.log(user.id)
    console.log(user.name)
    console.log(user.score)

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

    const [userScore, setUserScore] = useState(user.score)

    function raiseUserScore(){
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: user.name,
                score: user.score += 1
            })
        })
        .then((r) => r.json())
        .then((data) => setUserScore(data.score))
    }

    function handleClick(event) {
        if(event === question.correct_answer) {
            setCorrect((prev) => !prev)
            raiseUserScore()
        } else {
            setWrong((prev) => !prev)
        }
    }
    
    const questionAnswers = answers.map((answer) => {
        return (
            <button onClick={() => handleClick(answer)} value={answer}>{answer}</button>
        )
    })

    function nextQuestion() {
        setQuestionNumber(questionNumber + 1)
        setX(x + 1)
        // setX(Math.floor(Math.random() * questionAnswers.length))
    }

    const nextQuestionButton = <button onClick={nextQuestion}>Next Question</button>

    const gameOverButton = <button onClick={endGame}>End game</button>

    function endGame() {
        setGameOver(true)
        fetch('http://localhost:9292/results', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: user.name,
                score: userScore
            })
        })
        .then((r) => r.json())
    }

    if (questionNumber > 21) {
        endGame()
    }

    if (gameOver) {
        return (
            <GameOver userScore={userScore} />
        )
    }

    return (
        <div>
            <div>
                <h1>Question #{questionNumber}</h1>
                {question.question}
            </div>
            <div>
                {questionAnswers}
                {nextQuestionButton}
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