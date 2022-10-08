import React from "react";

interface IGameLose {
  solution: string;
}

const GameLose = ({ solution }: IGameLose) => {
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
