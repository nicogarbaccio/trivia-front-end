import React from 'react';
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function GameOver( {userScore, users} ) {
    return (
        <div className='gameover'>
            <h1>Game Over!</h1>
            <p className="yourscore">Your score: {userScore}</p>
            <NavLink exact to="/results"><Button>View Leaderboard</Button></NavLink>
        </div>
    )
}

export default GameOver;