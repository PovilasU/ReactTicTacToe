import React, { useState } from "react";
import "./Board.css"; // Import the CSS file for styling
import { calculateWinner, resetBoard } from "./utils";
import { Square } from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const winner = calculateWinner(board);
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  };
  return (
    <div className="board">
      <h1>Tic Tac Toe</h1>
      {[0, 1, 2].map((row) => (
        <div className="row" key={row}>
          {[0, 1, 2].map((col) =>
            Square(
              row * 3 + col,
              board,
              setBoard,
              currentPlayer,
              setCurrentPlayer
            )
          )}
        </div>
      ))}
      {winner && <h2>Winner: {winner}</h2>}
      <button onClick={resetBoard}>New Game</button>
    </div>
  );
};

export default Board;
