import React from "react";
import { NavLink } from "react-router-dom"

function ResultCard( {user} ) {

    return (
        <div>
            <h3>Game Over!</h3>
            <p>Your score: {user.score}</p>
            <NavLink exact to="/Leaderboard"><button>View Leaderboard</button></NavLink>
        </div>
    )
}

export default ResultCard;