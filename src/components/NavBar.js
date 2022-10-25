import React from 'react';
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <h1>Trivia!</h1>
            <NavLink exact to="/">Play</NavLink>
            <NavLink exact to="/Leaderboard">Leaderboard</NavLink>
        </nav>
    )
}

export default NavBar;