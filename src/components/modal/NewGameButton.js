import React from "react";

export const NewGameButton = ({ restartGame }) => {
  return (
    <button className="restart" onClick={restartGame}>
      <span className="text">Play Again</span>
    </button>
  );
};
