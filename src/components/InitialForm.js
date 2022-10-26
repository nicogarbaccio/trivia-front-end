import React, { useState } from "react";

function InitialForm( {start, save} ) {

    const [form, setForm] = useState({})
    function setName(name, value) {
        setForm({
            ...form,
            [name]:value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch( "http://localhost:9292/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( form )
      } )
      .then(res => res.json())
      start();
      save(form);
    }

    return (
        <form>
            <label htmlFor="name">Enter your name!</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value= {form.name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Start!</button>
        </form>
    )
}

export default InitialForm;