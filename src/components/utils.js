export const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null;
  };
  
  export const handleClick = (index, board, setBoard, currentPlayer, setCurrentPlayer) => {
    if (board[index] === null && !calculateWinner(board)) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
};

export const resetBoard = (setBoard, setCurrentPlayer) => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
};