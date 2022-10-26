import React, { useState } from "react";

function InitialForm( {start, save} ) {

    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch( "http://localhost:9292/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
            name: name,
            score: 0
        } )
      } )
      .then(res => res.json())
      start();
      console.log(name)
    }

    return (
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
    )
}

export default InitialForm;