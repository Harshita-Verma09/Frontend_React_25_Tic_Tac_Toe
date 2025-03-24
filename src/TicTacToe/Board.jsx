import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        console.log("Clicked", index);
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return (

        <div className="board-container flex flex-col items-center p-[20px] text-white">
            {isWinner ? <>{isWinner} won the game.
                <button className='bg-blue-500 p-3 m-2 rounded-md font-xl font-bold' onClick={handleReset}>Play Again</button>   </> :

                <>
                    <h1 className='font-3xl m-3 text-center '>Player  {isXTurn ? 'X' : "0"}  now is your turn.</h1>
                    <div className="board-row flex justify-evenly w-full">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row flex justify-evenly w-full">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row flex justify-evenly w-full">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            }

        </div>


    )
}

export default Board