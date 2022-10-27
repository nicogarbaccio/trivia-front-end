import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";

function InitialForm() {

    const [name, setName] = useState("")
    const [score, setScore] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)

    function start() {
        setGameStarted((prev) => !prev);
    }
    
    const user = {name: name, score: score}

    function handleSubmit(e) {
        e.preventDefault()
        fetch( "http://localhost:9292/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      } )
      .then(res => res.json())
      start();
    }

    if (gameStarted === true) {
        return <QuestionCard user={user} />
    } else {
    return (
        <div>
            <img src="https://princewilliamlivingweb.s3-accelerate.amazonaws.com/2022/01/Trivia-Day-.gif" alt="Trivia!"></img>
            <form>
                <label htmlFor="name">Enter your name!</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Start!</button>
            </form>
        </div>
    )
}
}

export default InitialForm;