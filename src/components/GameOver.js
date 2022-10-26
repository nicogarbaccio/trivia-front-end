import React from 'react';
import { NavLink } from "react-router-dom"

function GameOver( {userScore} ) {
    return (
        <div>
            <h1>Game Over!</h1>
            <p>Your score: {userScore}</p>
            <NavLink exact to="/Leaderboard"><button>View Leaderboard</button></NavLink>
        </div>
    )
}

export default GameOver;