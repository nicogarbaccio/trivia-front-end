import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="header">
            <h1 className='trivia'>Trivia: Cohort Edition!</h1>
            <div className='nav'>
                <NavLink exact to="/">Play</NavLink>
                <NavLink exact to="/results">Leaderboard</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;