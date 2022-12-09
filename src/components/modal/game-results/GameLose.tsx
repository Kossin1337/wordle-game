import React from "react";

interface IGameLose {
  solution: string;
  isCorrect: boolean;
}

const GameLose = ({ solution, isCorrect }: IGameLose) => {
  // if (!isCorrect) return null;

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
