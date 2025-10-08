import React, {useEffect, useState} from 'react';
import Board from "./Board";


const Game = () => {

    const initialState = new Array(9).fill(null)

    const [board, setBoard] = useState(initialState);
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState('')


    function handleMove(index) {
        if(winner){
            return;
        }
        const newBoard = board.map((el, ind) => ind === index ? player : el)
        setBoard(newBoard)
        setPlayer(
            player === 'X' ? 'O' : 'X'
        )
    }

    const findWinner = () => {

        const lines = [
            [0, 1, 2], //lines[i]
            [3, 4, 5], //i
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const[a,b,c] = lines[i];
            if(board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a])


            }
        }

      const isDraw = !board.includes(null)
        if(isDraw) {
            return setWinner('draw')
        }
    }

    useEffect(() => {
        findWinner()
    }, [board])

    const handleReset =() =>{
        setBoard(initialState);
        setPlayer('X')
        setWinner(null);
    }




    return (
        <div>
            <Board
                board={board}
                handleMove={handleMove}
            />

            <div style={{marginTop: '8px'}}>{winner === 'draw' ? 'It is a draw' : winner ? `Congratulations: ${winner}` : `Next Player: ${player}`}</div>

            <button onClick={handleReset} style={{marginTop: '8px'}}>Reset</button>
        </div>
    );
};

export default Game;