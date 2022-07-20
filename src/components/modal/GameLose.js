import React from "react";

const GameLose = ({ solution }) => {
  return (
    <div className="lose">
      <span className="title">YOU LOST</span>
      <span className="info">Correct Solution</span>
      <span className="solution">{solution}</span>
    </div>
  );
};

export default GameLose;
