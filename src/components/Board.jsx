import React, { useState } from "react";
import "./Board.css"; // Import the CSS file for styling
import { calculateWinner } from "./utils";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (board[index] === null && !calculateWinner(board)) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const renderSquare = (index) => (
    <button key={index} className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);

  return (
    <div className="board">
      <h1>Tic Tac Toe</h1>
      {[0, 1, 2].map((row) => (
        <div className="row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
};

export default Board;
