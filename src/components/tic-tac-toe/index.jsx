import { useState } from 'react';
import './styles.css'
// 0 1 2
// 3 4 5
// 6 7 8

function Square({value, onClick }){
    return <button onClick={onClick} className="square">{value}</button>
}

export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square onClick={() => handleClick(0)} />
                <Square onClick={() => handleClick(1)}/>
                <Square onClick={() => handleClick(2)}/>
            </div>
            <div className="row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    )
}