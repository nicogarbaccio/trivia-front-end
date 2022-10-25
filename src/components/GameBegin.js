import React from 'react';
import InitialForm from './InitialForm';

function GameBegin( { save, start }) {
    return (
        <div>
            <img src="https://princewilliamlivingweb.s3-accelerate.amazonaws.com/2022/01/Trivia-Day-.gif" alt="Trivia!"></img>
            <InitialForm save={save} start={start} />
        </div>
    )
}

export default GameBegin;