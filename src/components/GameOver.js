import React from 'react';
import { NavLink } from "react-router-dom"
import AllScores from './AllScores';

function GameOver( {userScore, users} ) {
    return (
        <div>
            <h1>Game Over!</h1>
            <p>Your score: {userScore}</p>
            <AllScores users={users} />
            {/* <NavLink exact to="/results"><button>View Leaderboard</button></NavLink> */}
        </div>
    )
}

export default GameOver;