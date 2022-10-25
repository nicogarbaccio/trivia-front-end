import React, { useEffect, useState } from "react";
import GameBegin from "./components/GameBegin";
import PlayGame from './components/PlayGame';

function GamePage() {

    const [gameStarted, setGameStarted] = useState(false)
    const [user, setUser] = useState("")

    function handleGameStart() {
        setGameStarted((prev) => !prev);
    }

    function updateUser(u) {
        setUser(u)
    }

    function savePlayer(input) { 
        const newUser = {
            name: input.name,
            score: input.score
        }

        updateUser(newUser)
    }

    return (
        <div>
            {gameStarted ? <PlayGame user={user} updateUser={updateUser} /> : <GameBegin save={savePlayer} start={handleGameStart} />}
        </div>
    )
}

export default GamePage;