import { handleClick } from "./utils";

export const Square = (
  index,
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer
) => (
  <button
    key={index}
    className="square"
    onClick={() =>
      handleClick(index, board, setBoard, currentPlayer, setCurrentPlayer)
    }
  >
    {board[index]}
  </button>
);
