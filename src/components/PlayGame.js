import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import QuestionCard from './QuestionCard';
import GameOver from './GameOver';

function PlayGame( {user, updateUser} ) {

    const [gameOver, setGameOver] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(1)
    const [userScore, setUserScore] = useState(0)

    function raiseUserScore(name){
        setUserScore(user.score += 1)
        updateUser(userScore)

        fetch('http://localhost:9292/users')
        .then(res=>res.json())
        .then(data=>{
            for(let i = data.length; i < data.length; i++){
                if (data[i].name === name){
                    fetch(`http://localhost:9292/users/${data[i].user_id}`, {
                        method: 'PATCH',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify( {score: userScore} )
                    })
                }
            }
        })
    }

    const [questionArray, setQuestionArray] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/questions/`)
        .then(res => res.json())
        .then(data => setQuestionArray(data))
    }, [])

    function sendToQuestionCard() {
        raiseUserScore(user.name)
        setQuestionNumber(questionNumber + 1)
    }

    if (gameOver) {
        return (
            <GameOver userScore={userScore} />
        )
    }

    return (
        <div>
            <h1>You are now playing the game</h1>
            <div>
                <h1>Question #{questionNumber}</h1>
                    <QuestionCard handleScore={sendToQuestionCard} questionArray={questionArray} />
            </div>
        </div>
    )
}

export default PlayGame;