import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <h1>Trivia!</h1>
            <div>
                <NavLink exact to="/">Play</NavLink>
                <NavLink exact to="/results">Leaderboard</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;