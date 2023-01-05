import React from "react";
import './Control.css'
import { useState } from "react";

function Control() {
    const[movesCounter, setMovesCounter] = useState(0);

    return (
        <div className="control">
            <button className="button">
                New Game
            </button>
            <span className="movesCounter">
                Moves: {movesCounter}
            </span>
            <span className="timer">
                Time: {`00:00`}
            </span>
        </div>
    )
}

export default Control;