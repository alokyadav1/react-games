import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import styles from "./tic.module.css"
function TicTacToe() {
  const [winner, setWinner] = useState(null);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState('X');
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      handleWinner(winner);
    } else if(count === 9) {
      handleWinner('Draw');
    }
  }, [cells])

  const handleWinner = (winner) => {
    setWinner(winner);
  }
  const handleClick = (id) => {
    const newCells = [...cells];
    if (turn === 'X') {
      newCells[id] = 'X';
      setTurn('O');
    } else {
      newCells[id] = 'O';
      setTurn('X');
    }
    setCells(newCells);
    setCount(count + 1);
  }
  const handleReset = () => {
    setWinner(null);
    setCells(Array(9).fill(null));
    setCount(0);
  }
  const checkWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }
  return (
    <div className="font-bold text-center">
      <h1 className='text-2xl'>TIC-TAC GAME</h1>
      <div className='mx-auto w-fit mt-5'>
        <div>
          {
            winner && (
              <div className='my-5'>
                <h3 className='text-xl'>Winner : {winner}</h3>
                <button className='bg-blue-700 text-white rounded-md p-2' onClick={handleReset}>Reset</button>
              </div>
            )
          }
        </div>
        <Grid cells={cells} handleWinner={handleWinner} handleClick={handleClick} checkWinner={checkWinner} winner={winner} />
      </div>
    </div>
  );
}

export default TicTacToe;
