import React from "react";

const GameWin = ({ solution, turn }) => {
  return (
    <div className="win">
      <span className="title">Congratulations!</span>
      {
        (turn = 6 ? (
          <span className="info">You Made IT!</span>
        ) : (
          <span className="info">{`You won the game on turn ${turn}`}</span>
        ))
      }
    </div>
  );
};

export default GameWin;
