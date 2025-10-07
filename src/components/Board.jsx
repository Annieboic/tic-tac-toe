import React from 'react';
import Square from "./Square";



const style = {
    border: "4px solid teal",
    borderWidth: "10px",
    width: "300px",
    height: "300px",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    margin: "auto",
}

const Board = ({board,handleMove}) => {


    return (
        <div style={style}>

            {board.map((square,ind) => (
                <Square
                key={ind}
                square={square}
                ind={ind}
                handleMove={handleMove}/>
            ))}

        </div>
    );
};

export default Board;