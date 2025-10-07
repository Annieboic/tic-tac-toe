import React from 'react';

const Square = ({square, ind, handleMove}) => {

    const style = {
        background:'#e8fcfc',
        border: '2px solid teal',
        fontSize: '50px',
        fontWeight: '800',
        cursor: 'pointer',
    }
    return (
        <button style={style} onClick={() => handleMove(ind)}>

            {square}


        </button>
    );
};

export default Square;