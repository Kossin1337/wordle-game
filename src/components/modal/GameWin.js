import React from "react";

const GameWin = ({ turn }) => {
  return (
    <div>
      <span>Congratulations!</span>
      <span>{`You won the game on turn ${turn}`}</span>
    </div>
  );
};

export default GameWin;
