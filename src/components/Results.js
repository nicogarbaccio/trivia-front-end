import React, { useEffect, useState } from 'react';
import GameOver from './GameOver';

function Results(){
    const [users, setUsers] = useState(undefined)

    useEffect(()=>{
        fetch('http://localhost:9292/results')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    let usersArray = [];

    if (users) {
        for (let i = 0; i < users.length; i++) {
            usersArray.push(<GameOver user={users[i]} />)
        }
    }

    return (
        <div>
            <h1>Leaderboard</h1>
            {users ? usersArray : undefined}
        </div>
    )
}

export default Results;