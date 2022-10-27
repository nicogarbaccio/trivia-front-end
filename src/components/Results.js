import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';

function Results(){
    const [users, setUsers] = useState(undefined)

    useEffect(()=>{
        fetch('http://localhost:9292/results')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    console.log(users)

    const usersArray = users?.map((user) => {
        return (
            <ResultCard
                name = {user.name}
                score = {user.score}
            />
        )
    })

    // if (users) {
    //     for (let i = 0; i < users.length; i++) {
    //         usersArray.push(<GameOver user={users[i]} />)
    //     }
    // }

    // if (users) {
    //     for (let user of users) {
    //         usersArray.push(user)
    //     }
    // }

    function clearBoard() {
        fetch(`http://localhost:9292/results`, {
            method: 'DELETE'
        })
    }

    const clearBoardButton = <button onClick={clearBoard}>Clear Leaderboard</button>

    return (
        <div>
            <h1>Leaderboard</h1>
            {usersArray}
            <div>
                {clearBoardButton}
            </div>
        </div>
    )
}

export default Results;