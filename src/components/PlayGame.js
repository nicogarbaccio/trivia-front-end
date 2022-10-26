import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import GameOver from './GameOver';

function PlayGame( {user, updateUser} ) {

    const [gameOver, setGameOver] = useState(false)
    const [userScore, setUserScore] = useState(0)

    function raiseUserScore(name){
        setUserScore(user.score + 1)
        updateUser(userScore)

        fetch('http://localhost:9292/users')
        .then(res=>res.json())
        .then (data => {
            if(data.name === name) {
                fetch(`http://localhost:9292/users/${name}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify( {score: userScore} )
                })
            }
        })
    }

    function sendToQuestionCard() {
        raiseUserScore(user.name)
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
                {/* <h1>Question #{questionNumber}</h1> */}
                <QuestionCard handleScore={sendToQuestionCard} setGameOver={setGameOver} />
            </div>
        </div>
    )
}

export default PlayGame;