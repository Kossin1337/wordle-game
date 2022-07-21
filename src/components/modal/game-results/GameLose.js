import React from "react";

const GameLose = ({ solution }) => {
  return (
    <div className="lose">
      <span className="title">YOU LOST</span>
      <div className="info">
        <span className="info-text">Correct Solution</span>
        <span className="solution">{solution}</span>
      </div>
    </div>
  );
};

export default GameLose;
