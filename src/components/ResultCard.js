import React from "react";

function ResultCard( {user} ) {

    return (
        <div>
            <h3>Game Over!</h3>
            <p>Your score: {user.score}</p>
            <button>View Leaderboard</button>
        </div>
    )
}

export default ResultCard;