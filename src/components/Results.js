import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';
import Button from 'react-bootstrap/Button';

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

    const clearBoardButton = <Button onClick={clearBoard}>Clear Leaderboard</Button>

    return (
        <div className='leaderboard'>
            <div className='titles'>
                <p>Name</p>
                <p>Score</p>
            </div>
            {usersArray}
            <div className='clear'>
                {clearBoardButton}
            </div>
        </div>
    )
}

export default Results;