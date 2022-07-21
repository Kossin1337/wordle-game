import React from "react";

const GameWin = ({ solution, turn }) => {
  return (
    <div className="win">
      <span className="title">YOU WON</span>
      <span className="solution">{solution}</span>
      <div className="column">
        <span className="info-text">IN</span>
        <span className="turn-count">{turn}</span>
        <span className="info-text">TURNS</span>
      </div>
    </div>
  );
};

export default GameWin;
