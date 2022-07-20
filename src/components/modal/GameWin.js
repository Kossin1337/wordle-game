import React from "react";

const GameWin = ({ solution, turn }) => {
  return (
    <div className="win">
      <span className="title">YOU WON</span>
      <span className="solution">{solution}</span>
      <div className="column">
        <span>IN</span>
        <span className="turn-count">{turn}</span>
        <span>TURNS</span>
      </div>
    </div>
  );
};

export default GameWin;
