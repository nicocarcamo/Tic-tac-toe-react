import React from "react";
import Tile from "./Tile.jsx";

const TicTacToe = () => {
  return (
      <>
        <Tile onClick={i => handleClick(i)} />
      </>
  );
};

export default TicTacToe;
