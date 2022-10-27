import React from 'react'

function ResultCard({name, score}) {
    return (
        <div className='leaders'>
            <p>{name}</p>
            <p>{score}</p>
        </div>
    )
}

export default ResultCard;