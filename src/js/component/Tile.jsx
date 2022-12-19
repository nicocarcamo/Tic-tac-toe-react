import React, { useState } from "react";
import Square from "./Square.jsx";

const Tile = () => {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = i => {
    if (winner || square[i]) {
      return;
    }

    const newSquare = square.slice();
    newSquare[i] = next ? "X" : "O";
    setSquare(newSquare);
    setNext(!next);

    if (getWinner(newSquare)) {
      setWinner(next ? "X" : "O");
    }
  };

  const renderSquare = i => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };

  const getWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  let status;
  let draw = true;
  
  for (let i = 0; i < square.length; i++) {
    if (square[i] === null) {
      draw = false;
      break;
    }
  }
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a draw!";
  } else {
    status = `Player Turn: ${next ? "X" : "O"}`;
  }
  

  return (
    <div className="mt-3">
      <h1 className="d-flex justify-content-center mb-3">Tic Tac Toe</h1>
      <div className="board-container">
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="status mt-3">{status}</div>
    </div>
  );
};

export default Tile;
