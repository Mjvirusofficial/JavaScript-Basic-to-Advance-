import React from 'react';
import Square from './Square';
import './Board.css';
import { useState } from 'react';


function Board() {
    const [id,setId] = useState(Array(9).fill(null))
    const [xTurn,setXTurn] = useState('')

    const CheackWinner = () =>{
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

        for(let logic of winnerLogic){
            
        //DESTRUCTURE THE ARRAY ELEMENT
          const [a,b,c] = logic;
          if(id[a] !== null && id[a] === id[b] && id[a] === id[c]){
            return id[a];
          }
        }

        return false;
    };

    const winner = CheackWinner()
    //FUNCTION OF ONCLICK METHOD#
    const Game = (index) =>{
    const copyId = [...id]
    copyId[index] = xTurn ? "X" : "O";
    setId(copyId)
    setXTurn(!xTurn)
    }
  return (
    <div className='board'>
    { winner ? <>{winner} Won the Game</> : <>
        <div className="row">
            <Square onClick={()=> Game(0)} value={id[0]}/>
            <Square onClick={()=> Game(1)} value={id[1]}/>
            <Square onClick={()=> Game(2)} value={id[2]}/>
        </div>

        <div className="row">
            <Square onClick={()=> Game(3)} value={id[3]}/>
            <Square onClick={()=> Game(4)} value={id[4]}/>
            <Square onClick={()=> Game(5)} value={id[5]}/>
        </div>

        <div className="row">
            <Square onClick={()=> Game(6)} value={id[6]}/>
            <Square onClick={()=> Game(7)} value={id[7]}/>
            <Square onClick={()=> Game(8)} value={id[8]}/>
        </div> </>}
    </div>
  )
}

export default Board;