import React, { useState } from "react";
import PlayGame from "./components/PlayGame"
import Button from 'react-bootstrap/Button';

function InitialForm() {

    const [name, setName] = useState("")
    const [user, setUser] = useState([])
    const [gameStarted, setGameStarted] = useState(false)

    function start() {
        setGameStarted((prev) => !prev);
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch( "http://localhost:9292/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            score: 0
        })
      } )
      .then(res => res.json())
      .then(data => setUser(data))
      start();
    }

    if (gameStarted === true) {
        return <PlayGame user={user} />
    } else {
    return (
        <div>
            <div className="intro">
                <h2>🌟Welcome to Trivia: Cohort Edition!🌟</h2>
                <h3>Enter your name below and press start. Good luck!</h3>
            </div>
            <div>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value= {name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Start!</Button>
                </form>
            </div>
        </div>
    )
}
}

export default InitialForm;