import React, {useState} from 'react';
import Board from "./Board";


const Game = () => {

    const initialState = new Array(9).fill(null)

    const [board, setBoard] = useState(initialState);
    const [player, setPlayer] = useState('X')


    function handleMove(index) {
        const newBoard = board.map((el, ind) => ind === index ? player : el)
        setBoard(newBoard)
        setPlayer(
            player === 'X' ? 'O' : 'X'
        )
    }






    return (
        <div>
            <Board
                board={board}
                handleMove={handleMove}
            />

            <div>Next Player: {player}</div>
        </div>
    );
};

export default Game;